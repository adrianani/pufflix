import React, {Component} from "react";

// Components
import Logo from '../Logo';
import Menu from './Menu';
import SocialLinks from './SocialLinks';
import LegalLinks from './LegalLinks';
import Disclaimer from './Disclaimer';

// Styling
import styles from '../../resources/css/style.scss';

export default () => {
    let menu = {
        movies: [
            "Watch-List",
            ["Favorites", 12],
            "Newest Movies",
            "Popular Movies",
            "Pick a Genre",
            "Feeling Lucky"
        ],
        series: [
            "Watch-List",
            ["Favorites", 7],
            "Newest Series",
            "Popular Series",
            "Ongoing Series",
            ["Today's Episodes", 10],
            "Pick a Genre",
            "Feeling Lucky"
        ]
    }
    return (
        <div className={styles.side_menu}>
            <Logo className={styles.logo}/>
            <Menu children={menu.movies} className={`${styles.menu}`} title="Movies" icon="clapperboard"/>
            <Menu children={menu.series} className={`${styles.menu}`} title="Series" icon="tv"/>
            <SocialLinks />
            <LegalLinks />
            <Disclaimer />
        </div>
    );
};