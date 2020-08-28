import React from "react";
import styled from "styled-components";
import { colors } from "resources";

const { whitegrey } = colors;

function _ProgressGauge({
  className,
  workingMachines,
  maxMachines,
  name,
  color,
  size,
}) {
  const radius =
    (size.substring(0, size.length - 2) -
      size.substring(0, size.length - 2) * (10 / 150)) /
    2;
  return (
    <div className={className}>
      <svg>
        <circle cx={radius} cy={radius} r={radius} />
        <circle cx={radius} cy={radius} r={radius} />
      </svg>

      <div>
        {workingMachines}/{maxMachines}
      </div>
      <div>{name}</div>
    </div>
  );
}

const ProgressGauge = styled(_ProgressGauge)`

  --color: ${({ color }) => color};
  --sizePx: ${({ size }) => size};
  --size: ${({ size }) => size.substring(0, size.length - 2)};
  --wMachines: ${({ workingMachines }) => workingMachines};
  --mMachines: ${({ maxMachines }) => maxMachines};

  position: relative;
  height: var(--sizePx);
  width: var(--sizePx);
  border-radius: 50%;
  z-index: 1000;

  > svg {
    position: relative;
    height: var(--sizePx);
    width: var(--sizePx);
    z-index: 1000;

    > circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: ${whitegrey};
      stroke-width: calc(var(--sizePx) * (10 / 150));
      stroke-linecap: round;
      transform: translate(calc(var(--sizePx) * (5 / 150)), 
        calc(var(--sizePx) * (5 / 150)));
    }

    circle:nth-child(2) {
      stroke: var(--color);
      stroke-dasharray: calc(var(--sizePx) * 440 / 150);
      stroke-dashoffset: calc(var(--sizePx) * 440 / 150 - (var(--sizePx) * 440 / 150 * (var(--wMachines) / var(--mMachines))));
      transform-origin: 50% 50%;
      transform: translate(calc(var(--sizePx) * (5 / 150)), 
        calc(var(--sizePx) * (-5 / 150))) rotate(-90deg);
    }
  }

  div:nth-child(2) {
    position: absolute;
    top: 0;
    left 0;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: calc(2rem * var(--size) / 150);
  }

  div:nth-child(3) {
    position: absolute;
    bottom: 0;
    left 0;
    width: 100%;
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    border-radius: 50%;
    word-spacing: var(--sizePx);
    font-size:calc(0.8em * var(--size) / 150);
  }
`;

ProgressGauge.defaultProps = {
  size: "150px",
};

export default ProgressGauge;
