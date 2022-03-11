import React from "react";
import { Connect, Send } from "../components/a";
import Modal from "../components/b/modal";
import styles from './index.module.scss';

const App: React.FC = () => {
  
  return (
    <div className={styles.container}>
      <Modal>
        {/* <Connect /> */}
        <Send />
      </Modal>
    </div>
  )
}

export default App;