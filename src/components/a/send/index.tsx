import React from "react";
import styles from './index.module.scss';

const Send: React.FC = () => {
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
      <div className={styles.send}>
        <div className={styles.input}>
          <label>Eth Amount</label>
          <input 
            type="text" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="0.00034"
          />
        </div>
        <div className={styles.input}>
          <label>receipent address</label>
          <input 
            type="text" 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            placeholder="0x00a00...."
          />
        </div>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Send;