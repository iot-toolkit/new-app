import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "resources";
import Modal from "./Modal";

const AlertContext = React.createContext();
export default AlertContext;

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
          title={title}
          body={body}
          buttons={buttons}
          onAnimationEnd={!duration ? handleAnimationEnd : () => {}}
          passRef={modal}
          height={height}
          width={width}
          position={position}
          modalClassName={modalClassName}
          customHTML={customHTML}
          visible={visible}
        />
      </div>
    )
  );
}

const Alert = styled(_Alert)`
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
