import React from "react";
import { useApp } from "../../../app/hooks";
import { ScreenStatus } from "../../../utils/types";
import styles from './index.module.scss'

const Connect: React.FC = () => {
  const { setStatus } = useApp()

  const handleClick = () => {
    setStatus(ScreenStatus.INITIAL)
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Connect Wallet (⚡)</button>
    </div>
  )
}

export default Connect;