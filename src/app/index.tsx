import React, { memo } from "react";
import Modal from "../components/b/modal";
import { useApp } from "./hooks";
import styles from './index.module.scss';

const App: React.FC = () => {
  const { screen } = useApp();
  
  return (
    <div className={styles.container}>
      <Modal>
        <>
        {screen}
        </>
      </Modal>
    </div>
  )
}

export default memo(App);