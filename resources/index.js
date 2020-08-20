import { keyframes } from "styled-components";

const colors = {
  primary: "#333",
  secondary: "#808080",
  whitegrey: "#ececec",
  overlay: "rgba(236,236,236, 0.8)",
};

const reverse = { primary: colors.secondary, secondary: colors.primary };

const keyframe = {
  default: keyframes`
  0% {
      background-position: 100%;
  }
  20% {
    background-position: 90%;
}
  100% {
      background-position: 0%;
  }
`,
  reverse: keyframes`
  0% {
      background-position: 0%;
  }
  20% {
    background-position: 10%;
}
  100% {
      background-position: 100%;
  }
`,
};

export { colors, reverse, keyframe as keyframes };
