import React from "react";
import Tile, { Head } from "../../Atoms/Tile";
import TilesContainer from "./TilesContainer";
import { number } from "@storybook/addon-knobs";

export default {
  title: "Design/Molecules/Tiles",
  component: TilesContainer,
};

export const TilesVariants = () => (
  <TilesContainer>
    <Tile>Body</Tile>
    <Tile>
      <Head>Normal Head</Head>
      Body
    </Tile>
    <Tile>
      <Head>
        Two element Head
        <div>Second</div>
      </Head>
      Body
    </Tile>
    <Tile>
      <Head center>Centered Head</Head>
      Body
    </Tile>
  </TilesContainer>
);

export const TilesSizing = () => (
  <TilesContainer>
    <Tile>Default grow=1</Tile>
    <Tile grow={number("Grow nr 1", 2)}>Grow {number("Grow nr 1")}</Tile>
    <Tile grow={number("Grow nr 2", 3)}>Grow {number("Grow nr 2")}</Tile>
  </TilesContainer>
);
