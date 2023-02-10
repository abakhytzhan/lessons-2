import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Counter from "@/components/Counter";
import Display from "@/components/Display";

export default function Home() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Head>
        <title>First React App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Display number={number} />
        <Counter setNumber={setNumber} />
      </main>
    </>
  );
}