import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/NavBar";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig } from "wagmi";
import { client } from "../utils/wagmi";
import { ConnectKitProvider } from "connectkit";

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="retro">
        <Header />
        <div className="min-h-[calc(100vh-68px)] pt-16 px-2 sm:px-4">
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </div>
        <Footer />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
