import React, {Component} from "react";

// Styling
import styles from '../../resources/css/style.scss';

export default () => {
    let links = [
        ['Privacy', '#'],
        ['Terms', '#']
    ];
    return (
        <div className={styles.legal}>
            {links.map((v, k) => {
                return <a key={k} href={v[1]}>{v[0]}</a>
            })}
        </div>
    );
};