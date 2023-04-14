import { createClient } from "wagmi";
import { getDefaultClient } from 'connectkit';

const firechain = {
  id: 997,
  name: "5ire",
  network: "5ireChain",
  nativeCurrency: {
    decimals: 18,
    name: "5ire",
    symbol: "5ire",
  },
  rpcUrls: {
    default: { http: ["https://rpc-testnet.5ire.network"] }
  },
  testnet: true,
};

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'FitQuest',
    chains: [firechain],
  })
);