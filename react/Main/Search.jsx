import React, {Component} from "react";

import styles from '../../resources/css/style.scss';

class Search extends Component {
    render() {
        return(
            <div className={styles.searchWrapper}>
                <i className={`${styles.fi} ${styles.search}`}></i>
                <input type='text' placeholder='Search...' />
                <i className={`${styles.fi} ${styles.list_filter}`}></i>
            </div>
        )
    }
}

export default Search;