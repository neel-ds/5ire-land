import { NextPage } from "next";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import Input from "../components/form-elements/input";
import Button from "../components/form-elements/button";
import FileUpload from "../components/form-elements/file-upload";
import Header from "../components/form-components/Header";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useToast } from "@chakra-ui/react";
import { Web3Storage } from "web3.storage";
import { useDisclosure } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import landABI from "../contract/landABI.json";
import { CONTRACT_ADDRESS } from "@/utils/contractAddress";

const AddLand: NextPage = () => {
  const [productData, setProductData] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");

  const handleData = (e: any) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: landABI,
    functionName: "registerLand",
    args: [
      (productData as any).id,
      (productData as any).Name,
      `${(productData as any).address} ${(productData as any).Location} ${
        (productData as any).pincode
      }`,
      (productData as any).locationURL,
      imageUrl,
      (productData as any).dimensions,
    ],
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  const toast = useToast();

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setProductData({
          locationURL: `https://www.google.com/maps?q=${latitude},${longitude}`,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Land record",
        description: "Land record added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <Head>
        <title>Add Land Information</title>
        <meta name="description" content="Chain - Register Land" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 my-8 mx-auto max-w-[1080px]">
        <div className="pt-5 pb-5 mx-auto max-w-7xl">
          <Header heading="Create Record of Rights" />
          <div className="flex flex-col w-full text-center">
            <div className="flex justify-center w-full py-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
              <div className="relative w-full h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20">
                  <div className="px-6 py-6 lg:px-8">
                    <form className="space-y-6">
                      <div className="flex flex-col md:flex-row md:space-x-5">
                        <div className="w-full space-y-6 md:w-1/2 mb-7 md-mb-0">
                          <Input
                            id="id"
                            name="id"
                            label="Land ID"
                            type="text"
                            placeholder="Enter Your Land ID"
                            onChange={(e) => {
                              handleData(e);
                            }}
                          />

                          <Input
                            id="name"
                            name="Name"
                            label="Owner's name "
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(e) => {
                              handleData(e);
                            }}
                          />
                          <Input
                            id="Address"
                            name="address"
                            label="Owner's Address"
                            placeholder="Enter Your Address"
                            onChange={(e) => {
                              handleData(e);
                            }}
                          />

                          <Input
                            id="dimensions"
                            name="dimensions"
                            label="Property dimensions"
                            placeholder="Enter the dimensions of your land"
                            onChange={(e) => {
                              handleData(e);
                            }}
                          />
                        </div>
                        <div className="w-full space-y-6 md:w-1/2">
                          <Input
                            id="Location"
                            name="Location"
                            label="Land Area"
                            placeholder="Location"
                            onChange={(e) => {
                              handleData(e);
                            }}
                          />
                          <Input
                            id="pincode"
                            name="pincode"
                            label="PINCODE"
                            placeholder="Enter Landmark PIN Code"
                            type="number"
                            onChange={(e) => {
                              handleData(e);
                            }}
                          />

                          <div className="flex space-x-5">
                            <FileUpload
                              id="productimage"
                              name="productimage"
                              label="Proof of ownership"
                              onChange={(e: any) => {
                                const image = URL.createObjectURL(
                                  e.target.files[0]
                                );
                                setImage(image);
                                const files = (e.target as HTMLInputElement)
                                  .files!;
                                const client = new Web3Storage({
                                  token:
                                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
                                });
                                client.put(files).then((cid: any) => {
                                  console.log(cid);
                                  setImageUrl(
                                    `https://${cid}.ipfs.w3s.link/${files[0].name}`
                                  );
                                });
                              }}
                            />
                            <Image
                              src={image !== "" ? image : "/preview.png"}
                              alt="preview"
                              width={200}
                              height={200}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="max-w-[200px] flex m-auto">
                        <Button
                          label="Register RoR"
                          onClick={() => {
                            write?.();
                          }}
                        />
                      </div>
                    </form>
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

export default AddLand;
