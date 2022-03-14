import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { injected } from '../components/Connectors/Connectors'
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
 



const ConnectToWollet: NextPage = () => {

 

  const router = useRouter();
 
  const context = useWeb3React();

  
  const connectButtonHandler = async () => {
    try {
      await context.activate(injected)
        const accountMetamask = context.account;
        if(!accountMetamask) return;
        console.log(accountMetamask);
        router.push(`/dashboard/${accountMetamask}`)
    } catch (error) {
      console.log(error)
    }
  };




  return (
    <div className={styles.container}>
     
        <button className={styles.button} onClick={connectButtonHandler}>
          Connect whit Wollet
        </button>
    </div>
  );
};

export default ConnectToWollet;
