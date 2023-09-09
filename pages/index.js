import Head from "next/head";
import { RightColumn } from "../components/RightColumn";
import { LeftColumn } from "../components/LeftColumn";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Join CHALK Performance Fitness | CHALK Performance Fitness
        </title>
        <meta name="description" content="CHALK Performance Fitness Sign Up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div class="flex flex-row h-screen">
        <LeftColumn />
        <RightColumn />
      </div>
    </>
  );
}
