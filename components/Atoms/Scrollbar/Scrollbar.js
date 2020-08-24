const { css } = require("styled-components");

const Scrollbar = css`
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-image: linear-gradient(
      45deg,
      rgba(51, 51, 51, 1) 0%,
      rgba(51, 51, 51, 0.7) 25%,
      rgba(51, 51, 51, 1) 75%,
      rgba(51, 51, 51, 0.7) 100%
    );
  }
`;

export const SlimScrollbar = css`
  ${Scrollbar};
  ::-webkit-scrollbar {
    width: 3px;
  }
`;

export default Scrollbar;
