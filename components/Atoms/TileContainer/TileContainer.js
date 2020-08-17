import styled from "styled-components";

const TileContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
`;

TileContainer.defaultProps = {
  spacing: "1em",
};

export default TileContainer;
