import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Block = () => {
  const [blockNumber, setBlockNumber] = useState();
  const [blockHash, setBlockHash] = useState();
  const [parentHash, setParentHash] = useState();
  const [stateRoot, setStateRoot] = useState();
  const [nonce, setNonce] = useState();
  const [timestamp, setTimestamp] = useState();
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  useEffect(() => {
    async function getBlockHash() {
      setBlockHash((await alchemy.core.getBlock()).hash);
    }
    getBlockHash();
  });

  useEffect(() => {
    async function getParentHash() {
      setParentHash((await alchemy.core.getBlock()).parentHash);
    }
    getParentHash();
  });

  useEffect(() => {
    async function getStateRoot() {
      setStateRoot((await alchemy.core.getBlock()).stateRoot);
    }
    getStateRoot();
  });

  useEffect(() => {
    async function getNonce() {
      setNonce((await alchemy.core.getBlock()).nonce);
    }
    getNonce();
  });

  useEffect(() => {
    async function getTimeStamp() {
      setTimestamp((await alchemy.core.getBlock()).timestamp);
    }
    getTimeStamp();
  });

  useEffect(() => {
    async function getTransactions() {
      setTransactions((await alchemy.core.getBlock()).transactions.length);
    }
    getTransactions();
  });
  return (
    <div>
      <div className="App">🔢 Block Number: {blockNumber}</div>
      <div className="App">⏱️ Timestamp: {timestamp}</div>
      <div className="App"> Transactions: {transactions}</div>
      <div className="App">Size: {timestamp}</div>
      <div className="App">Hash: {blockHash}</div>
      <div className="App">Parent Hash: {parentHash}</div>
      <div className="App">State Root: {stateRoot}</div>
      <div className="App">Nonce: {nonce}</div>;
    </div>
  );
};

export default Block;
