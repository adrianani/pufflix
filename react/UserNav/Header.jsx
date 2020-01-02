import React from 'react';

import styles from '../../resources/css/style.scss';
import avatar from '../../resources/images/users/dummy/avatar.png';

export default () => (
    <div className={styles.userNav_header}>
        <div className={styles.userNav_withIcon}>
            <img src={avatar} alt="Dummy's avatar" />
            <div>
                <span>Dummy</span>
                <small>Avid Watcher</small>
            </div>
        </div>
        <div className={styles.userNav_links}>
            <i className={`${styles.fi} ${styles.bullhorn}`}></i>
            <i className={`${styles.fi} ${styles.users}`}></i>
            <i className={`${styles.fi} ${styles.cog}`}></i>
            <i className={`${styles.fi} ${styles.sign_out}`}></i>
        </div>
    </div>
);