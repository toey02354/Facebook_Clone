import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <div className={styles.container}>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          vel nobis iure ex libero sunt et impedit! Voluptatibus, molestias
          tenetur?
        </div>
      </div>
    </>
  );
};

export default Home;
