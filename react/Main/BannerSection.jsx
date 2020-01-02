import React, {Component} from 'react';

import styles from '../../resources/css/style.scss';

export default props => (
    <div className={styles.bannerSection}>
        <h3>
            {props.title}
        </h3>
        <div className={styles.banner}  style={{backgroundImage: `url(${props.cover})`, width: props.width, height: props.height}}>
            <div className={styles.logo} style={{backgroundImage: `url(${props.logo})`}}></div>
        </div>
    </div>
);