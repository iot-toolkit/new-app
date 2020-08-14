import Layout from "../components/Organisms/Layout";
// import { DataContainer } from "../containers";

export default function App({ Component, pageProps }) {
  return (
    // <DataContainer.Provider>
    <Layout Component={Component} pageProps={pageProps} />
    // </DataContainer.Provider>
  );
}
