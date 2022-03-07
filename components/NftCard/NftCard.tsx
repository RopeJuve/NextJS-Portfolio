import { NFT } from "../../types/nft";
import styles from "./nft.module.css";

interface Props {
  nft: NFT;
}

export default function NftCard({ nft }: Props) {
  return (
    <div className={styles.cardContainer}>
      <img src={nft.imageUrl} />
      <div className={styles.infoNft}>
        <p>Name: {nft.name}</p>
        <p>ID: {nft.id}</p>
      </div>
    </div>
  );
}
