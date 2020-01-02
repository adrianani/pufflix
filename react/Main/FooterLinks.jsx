import React, {Component} from 'react';

import styles from '../../resources/css/style.scss';

export default props => (
    <div className={styles.footerLinks}>
        {props.links.map((v, k)=> {
            return(
                <div key={k} className={styles.footerLists}>
                    {v.map((l, i) => {
                        return <a key={i} href="#">{l}</a>
                    })}
                </div>
            )
        })}
    </div>
);