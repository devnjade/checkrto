import React from "react";
import styles from './index.module.scss';

const Pending: React.FC = () => {
  const [amount, setAmount] = React.useState<string>('');
  const [recipient, setRecipient] = React.useState<string>('');

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
        <p className={styles.title}>Your transaction of <span>0.00034Ξ</span> to <span>0x0001</span> is being processed</p>
        <a href="#" className={styles.ethscan}>View On EthScan</a>
      </div>
    </div>
  );
}

export default Pending;