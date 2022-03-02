import type { NextPage } from 'next'
import { useState } from 'react';
declare var window: any;
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [error, setError] = useState('');
  const [account, setAccount] = useState('');
  const [buttonName, setButtonName] = useState('Connect with Metamask');

  const connectButtonHandler = async () => {
    if(window.ethereum){
     const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
     setAccount(accounts[0]);
     setButtonName('Connected...')
    }else{
      setError('Metamask not instaled');
    }
 
  }
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={connectButtonHandler}>{buttonName}</button>
      <p>{error}</p>
      <p>Account: {account}</p>
    </div>
  )
}

export default Home
