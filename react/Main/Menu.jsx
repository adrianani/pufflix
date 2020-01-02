import React, {Component} from "react";

import Submenu from './Submenu'

import styles from '../../resources/css/style.scss';


export default () => {
    let children = [
        {
            name: 'Home',
            href: '#'
        },
        {
            name: 'Movies',
            href: 'movies',
            children: [
                'avengers-endgame',
                'john-wick-3',
                'detective-pikachu',
                'spider-man-far-from-home',
                'toy-story-4'
            ]
        },
        {
            name: 'Series',
            href: 'series',
            children: [
                'blacklist',
                'izombie',
                'daredevil',
                'archer',
                'the-good-place'
            ]
        },
        {
            name: 'Recommended',
            href: '#'
        }
    ];
    return(
        <div className={styles.menu}>
            <menu>
                {children.map((v, k) => {
                    return <a key={k} href={v.href} data-menu data-menuhref={`#${styles[v.href]}`}>{v.name}</a>;
                })}
                <a className={styles.plus} href="#" data-menu="true" data-menuhref="#undefined">
                    <i className={`${styles.fi} ${styles.plus}`}></i>
                    Plus
                </a>
            </menu>
            <Submenu id="movies" children={children[1].children} title="Watch a movie" context="You bring the popcorn, we bring the movie" />
            <Submenu id="series" children={children[2].children} title="Watch an episode" context="Sit back and relax with a new episode" />
        </div>
    )
};