import React from 'react'
import styles from "../styles/home.module.scss"

const index = () => {
  return (
    <div><center><h2>This is an <span className={styles.apiName}>API</span> <span className={styles.apipage}>Page🎉</span></h2></center>
    
    <center><p className={[styles.apiName, styles.apipage].join(" ")}> multiple css/scss APLY</p></center>
    
    </div>
  )
}

export default index