import React, {Component} from 'react';

import styles from '../../resources/css/style.scss';
import images from '../../resources/images/*/*/*.png';

export default props => (
    <div id={styles[props.id]} className={styles.submenu}>
        <div>
            <div className={styles.recentMovies}>
                <div>
                    {props.children.map((v) => {
                        let poster = images[props.id][v].poster;
                        return <div key={v} style={{backgroundImage: `url(${poster})`}}></div>
                    })}
                </div>
            </div>
            <div className={styles.text}>
                <h4>
                    {props.title}
                </h4>
                <span>
                    {props.context}
                </span>
            </div>
        </div>
    </div>
);