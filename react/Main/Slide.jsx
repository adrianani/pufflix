import React, {Component} from 'react';

// *Resources
import styles from '../../resources/css/style.scss';

class Slide extends Component {
    render() {
        return (
            <div className={`${styles.container}${this.props.next}${this.props.fade}${this.props.active}`}>
                <div className={styles.cover} style={{
                    backgroundImage: `url(${this.props.cover})`
                }}></div>
                <div className={styles.logo} style={{backgroundImage: `url(${this.props.logo})`}}></div>
                <div className={`${styles.options}${this.props.options}`}>
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
        )
    }
}

export default Slide;