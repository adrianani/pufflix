import React from 'react';

import styles from '../../resources/css/style.scss';


export default props => (
    <div className={styles.article} style={{backgroundImage: `url(${props.poster})`}}>
        <div className={styles.overlay}>
            <div className={styles.badges}>
                <div className={styles.r}>R</div>
                <div className={styles.imdb}>7.8<i className={`${styles.fi} ${styles.star}`}></i></div>
            </div>
            <div className={styles.title}>{props.name}</div>
            <div className={styles.duration}>2h 11m</div>
            <div className={styles.genres}>Action, Crime, Thriller</div>
            <div className={styles.release}>May 17, 2019</div>
        </div>
    </div>
);