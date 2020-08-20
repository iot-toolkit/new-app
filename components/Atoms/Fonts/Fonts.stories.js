// font-family: "Asap", sans-serif;
// font-family: "Baloo Tamma 2", cursive;
// font-family: "Hind", sans-serif;
// font-family: "Kanit", sans-serif;
// font-family: "Quicksand", sans-serif;
// font-family: "Saira", sans-serif;

import React from "react";
import styled from "styled-components";

export default {
  title: "Design/Atoms/Fonts",
};

const _Fonts = ({ className }) => (
  <div className={className}>
    <div className="Asap">Asap - Maszyna prazuje zajebiście, żźćśńółąę</div>
    <div className="Baloo">Baloo - Maszyna prazuje zajebiście, żźćśńółąę</div>
    <div className="Hind">Hind - Maszyna prazuje zajebiście, żźćśńółąę</div>
    <div className="Kanit">Kanit - Maszyna prazuje zajebiście, żźćśńółąę</div>
    <div className="Quicksand">
      Quicksand - Maszyna prazuje zajebiście, żźćśńółąę
    </div>
    <div className="Saira">Saira - Maszyna prazuje zajebiście, żźćśńółąę</div>
  </div>
);

const Fonts = styled(_Fonts)`
  font-size: 3rem;
  .Asap {
    font-family: "Asap", sans-serif;
  }
  .Baloo {
    font-family: "Baloo Tamma 2", cursive;
  }
  .Hind {
    font-family: "Hind", sans-serif;
  }
  .Kanit {
    font-family: "Kanit", sans-serif;
  }
  .Quicksand {
    font-family: "Quicksand", sans-serif;
  }
  .Saira {
    font-family: "Saira", sans-serif;
  }
`;

export const All = (args) => <Fonts {...args} />;
