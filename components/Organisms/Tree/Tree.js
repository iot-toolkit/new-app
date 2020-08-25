import React from "react";
import Root from "./Root";

export const DataContext = React.createContext();

function Tree({ data, setData }) {
  return (
    <DataContext.Provider value={{ data, setData, original: { ...data } }}>
      <Root data={data} original />
    </DataContext.Provider>
  );
}

Tree.defaultProps = {
  data: undefined,
  setData: () => {},
};

export default Tree;
