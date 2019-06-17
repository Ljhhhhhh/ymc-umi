import React from 'react'
import logoImg from '../../assets/logo.png'
import styles from './index.less'

const Logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <img src={logoImg} alt="logo"/>
    </div>
  )
}

export default Logo
