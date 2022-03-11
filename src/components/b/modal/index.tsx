import React from "react";
import styles from './index.module.scss'

const Modal: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Modal;