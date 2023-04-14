import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useContractRead } from "wagmi";
import { useEffect, useState } from "react";
import landABI from "../contract/landABI.json";
import { CONTRACT_ADDRESS } from "@/utils/contractAddress";

export default function Products() {
  interface ProductDetails {
    id: string;
    name: string;
    location: string;
    locationURL: string;
    imageURL: string;
    propertyDim: string;
  }

  const [productData, setProductData] = useState([{}]);

  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: landABI,
    functionName: "getAllLands",
  });

  useEffect(() => {
    console.log(data);
    if ((data as ProductDetails[]) && !isLoading) {
      let products = [];
      for (let product of data as ProductDetails[]) {
        products.push({
          id: product.id,
          name: product.name,
          location: product.location,
          imageURL: product.imageURL,
        });
      }
      setProductData(products);
    }
  }, [data, isLoading]);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  return (
    <>
      <Head>
        <title>Explore</title>
        <meta name="description" content="Explore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={"20"}
        maxW={"container.xl"}
        my={16}
        mx={"auto"}
      >
        {productData.map((products: any, index: number) => (
          <ProductCard {...products} index={index} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
}
