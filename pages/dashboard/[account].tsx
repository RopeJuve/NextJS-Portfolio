import styles from "./dashboard.module.css";
import { useRouter } from "next/router";

import { nftDAta } from "../../data/data";
import NftCard from "../../components/NftCard/NftCard";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { abi } from "../../data/abi";

var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);

const Dashboard = () => {
  const router = useRouter();
  const account = router.query.account;
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async () => {
      try {
        web3.eth.getBalance(account! as string).then((balance) => {
          console.log(web3.utils.fromWei(balance, "ether"));
          setBalance(web3.utils.fromWei(balance, "ether"));
        });

        let contract = new web3.eth.Contract(
          abi,
          "0xc17b109E146934D36c33E55FADE9cBDa791b0366"
        );
        const balance = contract.methods.balanceOf(account).call();
        console.log(web3.utils.fromWei(balance, "ether"));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const nftsLimit = 10;
  const pageLimit = 5;
  const numberPages = Math.ceil(nftDAta.length / nftsLimit);
  console.log(account);

  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
    console.log(currentPage);
  };

  const prewPage = () => {
    setCurrentPage((page) => page - 1);
    console.log(currentPage);
  };

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * nftsLimit - nftsLimit;
    const endIndex = startIndex + nftsLimit;
    return nftDAta.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit)
      .fill(numberPages)
      .map((_, idx) => start + idx + 1);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navBar}>
        <h1>Dasboard</h1>
        <div className={styles.walletContainer}>
          <img
            src="https://raydium.io/icons/msic-wallet-connected.svg"
            alt="wallet"
          />
          <div className={styles.addressContainer}>
            <p>{account}</p>
          </div>
        </div>
      </div>
      <div className={styles.nftContainer}>
        {getPaginatedData().map((nft) => (
          <NftCard key={nft.id} nft={nft} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        numberPages={numberPages}
        nextPage={nextPage}
        prewPage={prewPage}
        getPaginationGroup={getPaginationGroup}
        changePage={changePage}
      />
    </div>
  );
};

export default Dashboard;
