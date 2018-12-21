import styles from './index.css';
import React from 'react';
import Header from '../components/Header/Header';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
        <Header/>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
