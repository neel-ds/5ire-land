import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import {
  BsFillFileEarmarkLockFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: any;
}

const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  return (
    <div className="relative p-5 rounded-lg bg-white/40 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-30">
      <dt className="flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#732fff] dark:bg-[#a13bf7] text-white">
          {icon}
        </div>
        <p className="pt-5 text-lg leading-6 font-medium font-semibold text-[#732fff] dark:text-[#e99aff]">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-center text-gray-600 md:text-left dark:text-white">
        {desc}
      </dd>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>5ireLand</title>
        <meta name="description" content="5ireLand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 mx-auto max-w-[1080px]">
        <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block text-gray-700 xl:inline dark:text-white">
                Welcome to
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8b00ff] to-[#a75eff] dark:from-[#8c2bff] dark:to-[#d97dff] pb-4">
                5ire Land
              </span>
              <span className="block font-semibold text-gray-700 dark:text-[#e99aff] font-medium text-2xl">
                Decentralized Application
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get your Records of Right on-chain with sustainable approach.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
              <div>
                <Link
                  href="/explore"
                  className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-3xl text-white bg-gradient-to-r from-[#a13bf7] to-[#7500ff] hover:drop-shadow-[0_3px_5px_#7d7d7d] dark:hover:drop-shadow-[0_3px_5px_#8ce1ff] md:py-2 md:text-lg md:px-8"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex hidden my-auto w-[30%] md:w-[60%] ml-10 items-end">
            <Image
              src="/vector.png"
              width="600"
              height="500"
              className="ml-10"
              alt="Banner"
            />
          </div>
        </div>

        <div className="pt-5 pb-20 mx-auto max-w-7xl">
          <div className="flex flex-col w-full mb-5 text-center md:mb-10">
            <h1 className="text-4xl mb-10 font-bold title-font mb-4 text-[#732fff] dark:text-white">
              Features
            </h1>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <FeatureCard
              icon={<BsFillFileEarmarkLockFill size={25} />}
              title="Proof of Benefit"
              desc="The 5irechain has SPoS consensus which enables 17 UN SDGs to drive ESG with better approach. That's where government agrees on common ground."
            />
            <FeatureCard
              icon={<MdSecurity size={25} />}
              title="Security"
              desc="Everything on-chain! Prevent any forgery and errors while verifying a claim. No one can change RoR except the authorized person."
            />
            <FeatureCard
              icon={<BsFillCheckCircleFill size={25} />}
              title="Verification"
              desc="It also ensures that the right person is performing transaction or deal of the land. User can also transfer ownership after KYC process."
            />
          </dl>
        </div>
      </main>
    </>
  );
};

export default Home;
