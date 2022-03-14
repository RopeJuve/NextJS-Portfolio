import styles from "./dashboard.module.css";
import { useRouter } from "next/router";

import { nftDAta } from "../../data/data";
import NftCard from "../../components/NftCard/NftCard";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const account = router.query.account;

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
      <h1>Dasboard</h1>
      <p>Account:{account}</p>
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
