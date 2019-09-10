import React, {Component} from 'react';

//import Article from './Article';
import Header from './Header';
import Slider from './Slider';

import styles from '../../resources/css/style.scss';

class Main extends Component {
    render() {
        let slider = [
            {
                'name': 'avengers-endgame',
                'type': 'movies',
                'cover': 'center -87px'
            },
            {
                'name': 'once-upon-a-time-in-hollywood',
                'type': 'movies'
            }
        ]

        return(
            <div className={styles.mainWrapper}>
                <Header /> 
                <Slider sliders={slider} height="310px" timer='4'/>
            </div>
        );
    }
}

export default Main;