import styled from "styled-components";

const Tile = styled.div`
  background-color: #fefefe;
  padding: 16px;
  font-family: "Baloo 2";

  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);

  display: inline-block;
  margin: 8px;
  flex-grow: ${({ grow }) => grow};
`;

Tile.defaultProps = {
  grow: 1,
};

export default Tile;
