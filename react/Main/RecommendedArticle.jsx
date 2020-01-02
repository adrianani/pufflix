import React, {Component} from 'react';

import styles from '../../resources/css/style.scss';

export default props => (
    <div className={styles.recommendedArticle}>
        <div className={styles.poster} style={{backgroundImage: `url(${props.poster})`}}></div>
        <main>
            <h4>
                {props.name}
            </h4>
            <span>{props.data}</span>
            <div className={styles.friendInfo}>
                <div className={styles.avatar} style={{backgroundImage: `url(${props.avatar})`}}></div>
                <div>
                    <h5>{props.user}</h5>
                    <button>Watch Along</button>
                </div>
            </div>
        </main>
    </div>
);