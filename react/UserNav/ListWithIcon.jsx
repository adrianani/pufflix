import React from 'react';

import styles from '../../resources/css/style.scss';

export default props => (
    <div className={`${styles.list} ${styles.listWithIcon}`}>
        <h4>
            {props.title}
        </h4>
        <ul>
            {props.children.map((v, k) => {
                return (
                    <li key={k}>
                        <i className={`${styles.fi} ${v.icon}`}></i>
                        <div>
                            <span>
                                {v.title}
                            </span>
                            <small>
                                {v.data}
                            </small>
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
);