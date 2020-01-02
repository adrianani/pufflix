import React, {Component} from 'react';

// Styling
import styles from '../../resources/css/style.scss';

export default props => (
    <div className={props.className}>
        <span className={styles.title}>
            <i className={`${styles.fi} ${styles[props.icon]}`}></i>
            {props.title}
        </span>
        {props.children.map((v, k) => {
            if(typeof v === "string") {
                return <a key={k} href="#">{v}</a>;
            } else {
                return(
                    <a key={k} href="#">
                        {v[0]}
                        <span className={styles.counter}>{v[1]}</span>
                    </a>
                );
            }
        })}
    </div>
);