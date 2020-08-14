import React from "react";
import styled from "styled-components";

function _Image({
  src,
  alt = "unspecified",
  size,
  option = "trace",
  className,
}) {
  const props = {
    blur: { className: "blur-image", src: require(`images/${src}?lqip`) },
    trace: { src: require(`images/${src}?trace`).trace },
  };
  return (
    <div className={className}>
      <img {...props[option]} />
      <img alt={alt} src={require(`images/${src}?webp`)} />
    </div>
  );
}

const Image = styled(_Image)`
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: ${({ size }) => size};
  }

  .blur-image img {
    blur(25px);
  }
`;

export default Image;
