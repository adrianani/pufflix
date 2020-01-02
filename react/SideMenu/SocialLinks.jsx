import React, {Component} from "react";

// Styling
import styles from '../../resources/css/style.scss';

export default () => {
    let links = [
        ["facebook", "facebook-f", "https://facebook.com/puffysticks"],
        ["youtube", "youtube", "https://youtube.com"],
        ["twitter", "twitter", "https://twitter.com/puffysticks"],
        ["instagram", "instagram", "https://instagram.com/puffystickscom"]
    ];
    return (
        <div className={styles.social}>
            {links.map((v, k) => {
                return <a key={k} href={v[2]} target="_blank" rel="noopener"><i className={`fab fa-${v[1]}`}></i></a>
            })}
        </div>
    );
};