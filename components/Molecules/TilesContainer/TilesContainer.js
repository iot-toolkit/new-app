import styled from "styled-components";

const TilesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
`;

TilesContainer.defaultProps = {
  spacing: "1em",
};

export default TilesContainer;
