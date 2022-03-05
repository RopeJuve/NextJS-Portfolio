import type { NextPage} from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
declare var window: any;

const Dashboard: NextPage=  () => {
 const router = useRouter();
 const account = router.query.account;
  return (
    <div>Dasboard
      <p>Account:{account}</p>
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

// export const getStaticProps = async (context: any) => {
//   const account = context.params.account;

//   return {
//     props: {
//       account: account
//     }
//   }
// }

export default Dashboard;
