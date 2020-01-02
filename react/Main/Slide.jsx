import React, {Component} from 'react';

// *Resources
import styles from '../../resources/css/style.scss';

export default props => (
    <div className={`${styles.container}${props.next}${props.fade}${props.active}`}>
        <div className={styles.cover} style={{
            backgroundImage: `url(${props.cover})`
        }}></div>
        <div className={styles.logo} style={{backgroundImage: `url(${props.logo})`}}></div>
        <div className={`${styles.options}${props.options}`}>
             <div>
                 <i className={`${styles.fi} ${styles.popcorn}`}></i>
                 Watch the Movie
             </div>
             <div>
                 <i className={`${styles.fi} ${styles.play}`}></i>
                 Watch the Trailer
             </div>
             <div>
                 <i className={`${styles.fi} ${styles.checklist}`}></i>
                 Add to Watch List
             </div>
        </div>
    </div>
);