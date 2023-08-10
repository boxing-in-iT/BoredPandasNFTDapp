import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import MintText from "./MintText";
import { Web3Button } from "@web3modal/react";
import { CheckWl } from "./helper";

import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { ethers } from "ethers";

import Timer from "./Timer";
import PriceBlock from "./PriceBlock";
import Rectangle from "./Rectangle";

import FinePandas from "./FinePandas.json";

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #000000;
  color: #ffffff;
  z-index: 100;
`;

const Container = styled.div`
  position: relative;
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    justify-items: center;
    flex-direction: column-reverse;
    gap: 2rem;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MintButton = styled.button`
  background-color: #d5ff10;
  color: black;
  font-size: 16px;
  border-radius: 25px;
  padding: 15px 25px;
  border: none;
  cursor: pointer;
  margin-top: 10%;
`;

const Mint = () => {
  const { isConnected, address } = useAccount();
  const [whiteListed, setWhiteListed] = useState(false);
  const [addressUser, setAddress] = useState();

  const [quantity, setQuantity] = useState(1);
  const [price, setprice] = useState(0.02);
  const [rePrice, setRePrice] = useState(price);
  //   const [proofForMT, setProofForMT] = useState(["", "", ""]);

  const contractAddress = "0xd8F9d39E5e5745Bdf3a753A528B74Ad4443560A3";

  const { write, isLoading, isSuccess } = useContractWrite({
    address: contractAddress,
    abi: FinePandas.abi,
    functionName: "mint",
    // value: priceByUsdt,
    value: ethers.BigNumber.from("2000000000000000"),
    args: [1],
  });

  const { write: mintWhiteList } = useContractWrite({
    address: contractAddress,
    abi: FinePandas.abi,
    functionName: "mint",
    // value: priceByUsdtWhiteList,
    value: ethers.BigNumber.from("1000000000000000"),
    args: [1],
  });

  const { data: priceByUsdt } = useContractRead({
    address: contractAddress,
    abi: FinePandas.abi,
    functionName: "getPriceByUsdt",
    args: [35],
  });

  const { data: priceByUsdtWhiteList } = useContractRead({
    address: contractAddress,
    abi: FinePandas.abi,
    functionName: "getPriceByUsdt",
    args: [25],
  });

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected ", address);
      setAddress(address);
    },
  });

  useEffect(() => {
    if (addressUser != null) {
      console.log("Use efffect is called");
      CheckWl(addressUser);
    }
  }, [addressUser]);

  useEffect(() => {
    if (whiteListed) {
      setprice(0.01);
      setRePrice(0.01);
    } else {
      setprice(0.02);
      setRePrice(0.02);
    }
  }, [whiteListed]);

  const { MerkleTree } = require("merkletreejs");
  const keccak256 = require("keccak256");

  let whitelistAddresses = [
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
    "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
    "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
    "0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678",
    "0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7",
    "0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7",
  ];

  const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  const rootHash = merkleTree.getRoot();

  const CheckWl = async (addrs) => {
    console.log("Function is called");
    const claimingAddress = keccak256(addrs);
    const hexProof = merkleTree.getHexProof(claimingAddress);
    // setProofForMT(hexProof);
    setWhiteListed(merkleTree.verify(hexProof, claimingAddress, rootHash));
  };

  const Test = () => {
    console.log(priceByUsdt);
  };
  return (
    <>
      <Section>
        <Container>
          <Box>
            <MintText isWhiteListed={whiteListed} />
            <Timer />
            <PriceBlock
              price={price}
              rePrice={rePrice}
              setRePrice={setRePrice}
              guantity={quantity}
              setG={setQuantity}
            />
            {isConnected && (
              <>
                {whiteListed && (
                  <MintButton
                    onClick={() => {
                      mintWhiteList();
                    }}
                  >
                    Mint WhiteList
                  </MintButton>
                )}
                {!whiteListed && (
                  <MintButton
                    onClick={() => {
                      write();
                    }}
                  >
                    Mint
                  </MintButton>
                )}
              </>
            )}
            {!isConnected && (
              <>
                <Web3Button />
              </>
            )}
          </Box>
          <Box>
            <Rectangle />
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Mint;
