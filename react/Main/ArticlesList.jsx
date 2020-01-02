import React, {Component} from 'react';

import Article from './Article';

import styles from '../../resources/css/style.scss';

export default props => (
    <div className={styles.articlesList}>
        <h3>
            {props.title}
        </h3>
        <main>
            {props.articles.map((v, k) => {
                return <Article key={k} name={v['name']} poster={v['poster']} />
            })}
        </main>
    </div>
);