import React, {Component} from 'react';

//import Article from './Article';
import Header from './Header';
import Slider from './Slider';
import ArticlesList from './ArticlesList';
import RecommendedArticles from './RecommendedArticles';
import BannerSection from './BannerSection';
import Footer from './Footer';

import styles from '../../resources/css/style.scss';
import images from '../../resources/images/*/*/*.png';

export default () => {
    let slider = [
            {
                cover: images['movies']['avengers-endgame'].cover,
                logo: images['movies']['avengers-endgame'].logo,
            },
            {
                cover: images['movies']['once-upon-a-time-in-hollywood'].cover,
                logo: images['movies']['once-upon-a-time-in-hollywood'].logo,
            }
        ],
        movies = [
            {
                name: 'Avengers: Endgame',
                poster: images['movies']['avengers-endgame'].poster,
            },
            {
                name: 'John Whick 3: Parabellum',
                poster: images['movies']['john-wick-3'].poster,
            },
            {
                name: 'Pokémon Detective Pikachu',
                poster: images['movies']['detective-pikachu'].poster,
            },
            {
                name: 'Spider-Man: Far from Home',
                poster: images['movies']['spider-man-far-from-home'].poster,
            },
            {
                name: 'Toy Story 4',
                poster: images['movies']['toy-story-4'].poster,
            }
        ],
        series = [
            {
                name: 'The Blacklist',
                poster: images['series']['blacklist'].poster,
            },
            {
                name: 'iZombie',
                poster: images['series']['izombie'].poster,
            },
            {
                name: 'Daredevil',
                poster: images['series']['daredevil'].poster,
            },
            {
                name: 'Archer',
                poster: images['series']['archer'].poster,
            },
            {
                name: 'The Good Place',
                poster: images['series']['the-good-place'].poster,
            }
        ],
        friends = [
            {
                name: 'The Good Place',
                data: 'Season 2, Episode 4',
                avatar: images['users']['boldhamster'].avatar,
                user: 'BoldHamster',
                poster: images['series']['the-good-place'].poster,
            },
            {
                name: 'The Blacklist',
                data: 'Season 4, Episode 10',
                avatar: images['users']['slowlamprey'].avatar,
                user: 'SlowLamprey',
                poster: images['series']['blacklist'].poster,
            },
            {
                name: 'Daredevil',
                data: 'Season 1, Episode 9',
                avatar: images['users']['smallduck'].avatar,
                user: 'SmallDuck',
                poster: images['series']['daredevil'].poster,
            }
        ]

    return(
        <div className={styles.mainWrapper}>
            <Header /> 
            <Slider sliders={slider} height="310px" timer='4'/>
            <ArticlesList title="Latest Movies" articles={movies}/>
            <ArticlesList title="Latest Series" articles={series}/>
            <RecommendedArticles title="From Your Friends' Network" articles={friends} />
            <BannerSection  title="This Weekend at the Cinema" 
                            cover={images['movies']['once-upon-a-time-in-hollywood'].cover}
                            logo={images['movies']['once-upon-a-time-in-hollywood'].logo} 
                            width="100%"
                            height="235px"
                            />
            <Footer />
        </div>
    );
};