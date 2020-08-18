import styled from "styled-components";

const Head = styled.div`
  font-size: 1.1em;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 8px;

  display: flex;
  justify-content: ${({ center }) =>
    center ? "space-around" : "space-between"};
`;

Head.defaultProps = {
  center: false,
};

export default Head;
