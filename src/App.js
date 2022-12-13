import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import Block from "./components/Block";

import "./App.css";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  return (
    <div className="container">
      <Header />
      <Block />
      <Transactions />
    </div>
  );
}

export default App;
