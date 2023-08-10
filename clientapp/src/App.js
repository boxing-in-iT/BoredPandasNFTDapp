import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/globalstyles/GlobalStyles";
import { light } from "./components/globalstyles/Themes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { polygonMumbai } from "wagmi/chains";
import Mint from "./components/pages/mint/Mint";

// const chains = [arbitrum, mainnet, polygon];
const chains = [polygonMumbai];
const projectId = "94d329767af23cbc1167835185056cc9";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/mint" element={<Mint />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={polygonMumbai}
        themeMode="dark"
        themeVariables={{
          "--w3m-accent-color": "#d5ff10",
          "--w3m-accent-fill-color": "#000",
          "--w3m-background-color": "#d5ff10",
        }}
      />
    </>
  );
}

export default App;
