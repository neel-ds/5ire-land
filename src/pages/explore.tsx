import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useContractRead } from "wagmi";
import { useEffect, useState } from "react";

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
