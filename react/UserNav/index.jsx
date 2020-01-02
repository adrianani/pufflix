import React, {Component} from 'react';

import styles from '../../resources/css/style.scss';

import Header from './Header';
import List from './List';
import ListWithIcon from './ListWithIcon';

class UserNav extends Component {
    render() {
        let notifications = [
                {
                    title: 'Mindhunter',
                    data: 'Season 2 Available',
                },
                {
                    title: 'Archer',
                    data: 'New Episode Available',
                },
                {
                    title: 'Stranger Things',
                    data: 'Season 3 Available',
                }
            ],
            friends = [
                {
                    title: 'BoldHamster',
                    data: 'Watching The Good Place',
                },
                {
                    title: 'SlowLamprey',
                    data: 'Watching The Blacklist',
                },
                {
                    title: 'SmallDuck',
                    data: 'Watching Daredevil'
                }
            ],
            watchmore = [
                {
                    title: 'Archer',
                    data: 'Season 10, Episode 9',
                    icon : styles.play,
                }
            ];
        return(
            <div className={styles.userNav}>
                <Header />
                <ListWithIcon title='Continue Watching' children={watchmore} />
                <List title='Notifications' children={notifications}/>
                <List title='Friends Online' children={friends}/>
            </div>
        )
    }
}

export default UserNav;