import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { colors } from "resources";

function _Slider({ chosen, choices, className }) {
  console.log(choices, chosen);
  return (
    <div className={className}>
      <ul className="pagination">
        {choices.map((val, idx) => (
          <div
            className={
              chosen === idx
                ? "pagination__link" + " is_active"
                : "pagination__link"
            }
            onClick={val}
            key={idx}
          >
            {chosen === idx && <VscChromeClose />}
          </div>
        ))}
      </ul>
    </div>
  );
}

const Slider = styled(_Slider)`
  z-index: 99;
  position: absolute;
  bottom: 48px;
  display: flex;
  width: 100vw;
  justify-content: center;

  > ul {
    padding-inline-start: 0;
  }

  .pagination {
    display: flex;
    justify-content: space-around;
    align-intems: center;
    flex-flow: row nowrap;

    &__link {
      position: relative;
      text-indent: -99em;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;

      border-radius: 50%;
      background: white;
      transform: scale(0.2);
      transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &:hover {
        transform: scale(0.3);
        > svg {
          width: 75%;
          height: 75%;
        }
      }

      &.is_active {
        transform: scale(0.5);
      }

      > svg {
        color: ${colors.primary};
        width: 10%;
        height: 10%;
        transition: all 250ms ease;
      }
    }
  }
`;

export default Slider;
