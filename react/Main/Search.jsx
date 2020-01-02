import React, {Component} from "react";

import styles from '../../resources/css/style.scss';

export default () => (
    <div className={styles.searchWrapper}>
        <i className={`${styles.fi} ${styles.search}`}></i>
        <input type='text' placeholder='Search...' />
        <i className={`${styles.fi} ${styles.filter_list}`}></i>
    </div>
);