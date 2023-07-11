import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/icons";
// import project1 from "../public/images/projects/crypto-screener-cover-image.jpg";
import solana from "../public/images/projects/solana.jpg";
import portfolio from "../public/images/projects/portfolio.jpg";
import speak from "../public/images/projects/speak.jpg";
import vaccine from "../public/images/projects/vaccine.jpg";
import smartshop from "../public/images/projects/smartshop.jpg";
import music from "../public/images/projects/music.jpg";
import connect from "../public/images/projects/connect.jpg";
import TransitionEffect from "../components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs-rounded-[1.5rem] " />
      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={type}
          className="w-full h-auto lg:w-full"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className={"icon"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, type, github, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image
          priority={true}
          src={img}
          alt={type}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>
        <div className="mt-2 flex items-center justify-center space-x-2">
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={"icon"} />
          </Link>
          {link && (
            <Link href={link} target="_blank" className="w-8 md:w-6">
              Link
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  // console.log(project1)
  return (
    <>
      <Head>
        <title>Rishabh Gupta | Projects</title>
        <meta
          name="description"
          content="Portfolio Website of Rishabh Gupta"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Unleash the boundless power of imagination!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
              <FeaturedProject
                title="Portfolio Website"
                img={portfolio}
                type="Featured Project"
                github="https://github.com/BEthereal/Portfolio"
                link="https://portfolio-liard-nine-80.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">           
              <Project
                className="project-item"
                type="Project"
                title="Solana based-NFT Collection Generator"
                summary="Developed a Solana-based NFT Collection Generator, leveraging blockchain technology to create unique and verifiable digital assets."
                img={solana}
                github="https://github.com/BEthereal/SolanaGen---Solana-based-NFT-Collection-Generator"            
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                className="project-item"
                title="Speak Bot"
                img={speak}
                summary="Created SpeakBot, a cutting-edge React-based chatbot featuring advanced speech recognition capabilities."
                type="Project"
                github="https://github.com/BEthereal/SpeakBot---React-Chatbot-with-Speech-Recognition/tree/main/public/images"  
                             
              />          
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                className="project-item"
                title="Connect-4"
                img={connect}
                summary="Created a digital version of the classical board game of Connect-4 And implemented a computer player which can not only suggest moves for and against the player, but also play the game against itself too!"
                type="Project"
                github="https://github.com/BEthereal/Connect-4"
               
                
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                className="project-item"
                title="Shop Smart Online"
                img={smartshop}
                summary='Developed a dynamic E-Commerce site, "ShopSmart Online," utilizing ReactJS to create a user-friendly interface with seamless navigation, interactive features, and optimized performance. Leveraged React hooks and implemented API calls to enhance functionality and provide a seamless shopping experience for users.'
                type="Project"
                github="https://github.com/BEthereal/ShopSmart-Online"
                
              
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                className="project-item"
                title="Find My Vaccine"
                img={vaccine}
                summary='Developed a comprehensive Vaccine Scheduler & Information Program to assist users in scheduling their COVID-19 vaccine shots at the most convenient date and time available. Implemented a user-friendly interface that also dispels vaccine-related myths and addresses doubts, providing accurate and reliable information. Developed a dynamic E-Commerce site, "ShopSmart Online," utilizing ReactJS to create a user-friendly interface with seamless navigation, interactive features, and optimized performance. Leveraged React hooks and implemented API calls to enhance functionality and provide a seamless shopping experience for users.'
                type="Project"
                github="https://github.com/BEthereal/Find-My-Vaccine"
                
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                className="project-item"
                title="MP3 Music Player"
                img={music}
                summary='Made MP3 Music Player Using TKinter In Python '
                github="https://github.com/BEthereal/MP3-Music-Player-Using-TKinter"
                
              />
            </div>                   
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
