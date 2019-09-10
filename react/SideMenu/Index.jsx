import React, {Component} from "react";

// Components
import Logo from '../Logo';
import Menu from './Menu';
import SocialLinks from './SocialLinks';
import LegalLinks from './LegalLinks';
import Disclaimer from './Disclaimer';

// Styling
import styles from '../../resources/css/style.scss';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: {
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
        }
    }

    render() {
        return (
            <div className={styles.side_menu}>
                <Logo className={styles.logo}/>
                <Menu children={this.state.menu.movies} className={`${styles.menu}`} title="Movies" icon="clapperboard"/>
                <Menu children={this.state.menu.series} className={`${styles.menu}`} title="Series" icon="tv"/>
                <SocialLinks />
                <LegalLinks />
                <Disclaimer />
            </div>
        );
    }
}

export default SideMenu;