import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../../resources";

const AlertContext = React.createContext();
export default AlertContext;

const alertKeyframes = css`
  @keyframes fadeIn {
    0% {
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
    20% {
      background-position: 20%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.02);
    }
    100% {
      background-position: 100%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
  }

  @keyframes fadeOut {
    0% {
      background-position: 100%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
    20% {
      background-position: 80%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.08);
    }
    100% {
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
  }
`;

const Modal = styled.div`
  ${({ customKeyframes }) => customKeyframes || alertKeyframes}
  transition: height .25s ease, width .25s ease;

  margin: 15vh auto;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  padding: 1.4em 3.3em;
  border-radius: 6px;

  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${colors.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;
`;

function _Alert({
  visible,
  setProps,
  hide,
  callback,
  className,
  modalClassName,
  overlayClassName,
  customKeyframes,
  height,
  width,
  position,
  title,
  body,
  buttons,
  duration,
  customHTML,
}) {
  const [render, setRender] = useState(false);
  const modal = useRef(null);

  useEffect(() => {
    if (visible) setRender(true);
    else if (duration) finish();
  }, [visible]);

  const handleAnimationEnd = () => {
    if (!visible) finish();
  };

  const finish = () => {
    setRender(false);
    if (callback) callback();
    setProps({});
  };

  const handleClickOut = (e) => {
    if (modal.current.contains(e.target)) return;
    hide();
  };

  return (
    render && (
      <div
        className={className + " " + overlayClassName}
        onClick={handleClickOut}
      >
        <Modal
          style={{
            animation: `${
              duration
                ? "fadeOut " + duration * 1 + "ms linear"
                : visible
                ? "fadeIn 1s ease-out"
                : "fadeOut .4s ease-out"
            }`,
          }}
          onAnimationEnd={!duration ? handleAnimationEnd : () => {}}
          ref={modal}
          height={height}
          width={width}
          position={position}
          className={modalClassName}
        >
          {visible && customHTML}
        </Modal>
      </div>
    )
  );
}

export const Alert = styled(_Alert)`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: ${colors.overlay};
`;

Alert.defaultProps = {
  visible: false,
  setProps: undefined,
  hide: undefined,
  callback: undefined,
  className: undefined,
  modalClassName: undefined,
  overlayClassName: undefined,
  customKeyframes: undefined,
  height: "350px",
  width: "500px",
  position: undefined,
  title: undefined,
  body: undefined,
  buttons: undefined,
  duration: undefined,
  customHTML: undefined,
};

export function AlertProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState({});
  var timer;

  const show = (p) => {
    if (timer) clearTimeout(timer);
    setProps(p);
    setVisible(true);
    if (p.duration) timer = setTimeout(() => hide(), p.duration);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <AlertContext.Provider value={{ show, hide }}>
      <Alert {...{ ...props, ...{ visible, setProps, hide } }} />
      {children}
    </AlertContext.Provider>
  );
}
