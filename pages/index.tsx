import type { NextPage } from "next";
import { useEffect, useState } from "react";
declare var window: any;
import styles from "../styles/Home.module.css";
import Link from "next/link";




const ConnectToWollet: NextPage = () => {
  const [error, setError] = useState("");
  const [accounts, setAccounts] = useState([]);
  
  const connectButtonHandler = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      console.log(accounts[0]);
    } else {
      setError("Metamask not instaled");
    }
  };

  useEffect(() => {
   connectButtonHandler();
  },[])

  return (
    <div className={styles.container}>
      <Link
        href={{
          pathname: `/dashboard/${accounts[0]}`,
        }}
      >
        <button className={styles.button} onClick={connectButtonHandler}>
          Connect whit Wollet
        </button>
      </Link>

      <p>{error}</p>
    </div>
  );
};

export default ConnectToWollet;
