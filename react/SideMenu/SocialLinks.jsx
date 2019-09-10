import React, {Component} from "react";

// Styling
import styles from '../../resources/css/style.scss';

class SocialLinks extends Component {
    render() {
        let links = [
            ["facebook", "facebook-f", "https://facebook.com/puffysticks"],
            ["youtube", "youtube", "https://youtube.com"],
            ["twitter", "twitter", "https://twitter.com/puffysticks"],
            ["instagram", "instagram", "https://instagram.com/puffystickscom"]
        ];
        return (
            <div className={styles.social}>
                {links.map((v, k) => {
                    return <a key={k} href={v[2]} target="_blank" rel="noopener" data-tooltip data-tooltiptitle={v[0]}><i className={`fab fa-${v[1]}`}></i></a>
                })}
            </div>
        );
    }
}

export default SocialLinks;