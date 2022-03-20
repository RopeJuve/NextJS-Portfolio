import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { injected } from "../components/Connectors/Connectors";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import Web3 from "web3";

var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);

const ConnectToWollet: NextPage = () => {
  const router = useRouter();
  const context = useWeb3React();

  const connectButtonHandler = async () => {
    try {
      await context.activate(injected);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);

      if (!accounts[0]) {
        return;
      }

      router.push(`/dashboard/${accounts[0]}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={connectButtonHandler}>
        Connect with Metamask
      </button>
    </div>
  );
};

export default ConnectToWollet;
