import React from 'react';

import styles from '../../resources/css/style.scss';

export default props => (
    <div className={styles.list}>
        <h4>
            {props.title}
        </h4>
        <ul>
            {props.children.map((v, k) => {
                return (
                    <li key={k}>
                        <span>
                            {v.title}
                        </span>
                        <small>
                            {v.data}
                        </small>
                    </li>
                );
            })}
        </ul>
        <a href="#" className={styles.more}>
            More
        </a>
    </div>
);