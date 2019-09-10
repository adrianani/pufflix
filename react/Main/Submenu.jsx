import React, {Component} from 'react';

import styles from '../../resources/css/style.scss';
import images from '../../resources/images/*/*/*.png';

class Submenu extends Component {
    render() {
        return (
            <div id={styles[this.props.id]} className={styles.submenu}>
                <div>
                    <div className={styles.recentMovies}>
                        <div>
                            {this.props.children.map((v) => {
                                let poster = images[this.props.id][v].poster;
                                return <div key={v} style={{backgroundImage: `url(${poster})`}}></div>
                            })}
                        </div>
                    </div>
                    <div className={styles.text}>
                        <h4>
                            {this.props.title}
                        </h4>
                        <span>
                            {this.props.context}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Submenu;