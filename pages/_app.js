import "resources/index.css";
import Layout from "organisms/Layout";
// import { DataContainer } from "containers";

export default function App({ Component, pageProps }) {
  return (
    // <DataContainer.Provider>
    <Layout Component={Component} pageProps={pageProps} />
    // </DataContainer.Provider>
  );
}
