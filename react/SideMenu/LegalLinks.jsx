import React, {Component} from "react";

// Styling
import styles from '../../resources/css/style.scss';

class LegalLinks extends Component {
    render() {
        let links = [
            ['Privacy', '#'],
            ['Terms', '#']
        ];
        return (
            <div className={styles.legal}>
                {links.map((v, k) => {
                    return <a key={k} href={v[1]} target="_blank">{v[0]}</a>
                })}
            </div>
        );
    }
}

export default LegalLinks;