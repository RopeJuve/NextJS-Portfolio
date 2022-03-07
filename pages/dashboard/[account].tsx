import type { NextPage} from "next";
import styles from './dashboard.module.css'
import { useRouter } from "next/router";
declare var window: any;
import {nftDAta} from '../../data/data'
import NftCard from "../../components/NftCard/NftCard";
import Pagination from '../../components/Pagination/Pagination'




const Dashboard =  () => {
 const router = useRouter();
 const account = router.query.account;
 console.log(account)
  return (
    <div className={styles.mainContainer}>
      <h1>Dasboard</h1>
      <p>Account:{account}</p>
      <div className={styles.nftContainer}>{
        nftDAta.map( nft => (
          <NftCard key={nft.id} nft={nft}/>
          ))
        }</div>
        <Pagination />
    </div>
  )
};



// export const getStaticPaths = async () => {
//   if (window.ethereum) {
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const paths = accounts.map( (acc: any) => {
//       return {
//         params: { account: acc}
//       }
//     });

//     return {
//       paths,
//       fallback: false
//     }
// }
// }

// export const getStaticProps = async ({query: {page:number = 1}}) => {
 
// const nftToShow = nftDAta.slice(number-1 ,number * 10);
//   return {
//     props: {
//       nftData:nftToShow,
//       page: number 
//     }
//   }
// }

export default Dashboard;
