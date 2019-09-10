import React, {Component} from "react";

// Styling
import styles from '../../resources/css/style.scss';

class Disclaimer extends Component {
    render() {
        return (
            <div className={styles.disclaim}>
                <span>©2019 pufflix<br/>All Rights Reserved</span>
                <span>This website may contain mature content</span>
            </div>
        );
    }
}

export default Disclaimer;