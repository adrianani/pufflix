import React, {Component} from 'react';

import RecommendedArticle from './RecommendedArticle';

import styles from '../../resources/css/style.scss';

export default props => (
    <div className={styles.recommendedArticles}>
        <h3>{props.title}</h3>
        <div>
            {props.articles.map((v, k) => {
                return <RecommendedArticle key={k} name={v.name} data={v.data} poster={v.poster} user={v.user} avatar={v.avatar} poster={v.poster}/>
            })}
        </div>
    </div>
);