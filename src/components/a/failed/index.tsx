import React from "react";
import styles from './index.module.scss';

const Failed: React.FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wallet}>
        <div>
          <p className={styles.title}>Balance</p>
          <p className={styles.amount}>0.00034Ξ</p>
        </div>
        <button>
          <p>0x8a34</p>
          <span>disconnect</span>
        </button>
      </div>
      <div className={styles.sent}>
        <p className={styles.title}>Your transaction <span>Failed</span></p>
        <a href="#" className={styles.ethscan}>View On EthScan</a>
      </div>
    </div>
  );
}

export default Failed;