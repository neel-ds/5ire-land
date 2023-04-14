import { NextPage } from "next";
import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Input from "../components/form-elements/input";
import Button from "../components/form-elements/button";
import Header from "../components/form-components/Header";
import ProductDetail from "../components/product-detail";
import { useDisclosure, useToast } from "@chakra-ui/react";
import {
  useContractEvent,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useContractRead,
} from "wagmi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
} from "@chakra-ui/react";

interface ProductDetails {
  name: string[];
  imageURL: string;
  location: string;
  locationURL: string[];
  propertyDim: string;
}

const ChangeOwnership: NextPage = () => {
  const [productData, setProductData] = useState({});
  const [productID, setProductID] = useState(0);
  const [name, setName] = useState("");
  const [productLocation, setProuctLocation] = useState("");
  const [locationURL, setLocationURL] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();
  const toast = useToast();

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocationURL(
          `https://www.google.com/maps?q=${latitude},${longitude}`
        );
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Transfer RoR</title>
        <meta name="description" content="Transfer RoR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 my-8 mx-auto max-w-[1080px]">
        <div className="max-w-7xl pt-5 pb-5 mx-auto">
          <Header heading="Transfer Record of Right" />
          <div className="flex flex-col lg:flex-row text-center w-full">
            <div className="w-full md:w-1/2">
              <div className="w-full pl-0 p-4 overflow-x-hidden overflow-y-auto md:inset-0 justify-center flex md:h-full">
                <div className="relative w-full h-full md:h-auto">
                  <div className="relative bg-white bg-opacity-20 rounded-lg shadow dark:bg-gray-700 dark:bg-opacity-20">
                    <div className="px-6 py-6 lg:px-8">
                      <form className="space-y-6">
                        <Input
                          id="productid"
                          name="productid"
                          label="Property ID"
                          type="text"
                          placeholder="Property ID"
                          onChange={(e) => setProductID(e.target.value)}
                        />

                        <Input
                          id="name"
                          name="name"
                          label="Owner Name"
                          type="text"
                          placeholder="Owner's Name"
                          onChange={(e) => setName(e.target.value)}
                        />

                        <Button label="Obtain RoR"/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full pl-0 p-4 overflow-x-hidden overflow-y-auto md:inset-0 justify-center flex md:h-full">
                <div className="relative w-full h-full md:h-auto">
                  <div className="relative rounded-lg shadow-lg bg-white/30 bg-opacity-30 dark:bg-gray-700/30 dark:bg-opacity-30">
                    <div className="px-6 py-6 lg:px-8">
                      <p className="text-xl font-medium title-font mb-4 text-[#a13bf7]">
                        {(productData as any).location}
                      </p>
                      <div className="p-2 flex flex-col">
                        <ProductDetail
                          label=""
                          value={(productData as any).imageURL}
                          type="image"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChangeOwnership;
