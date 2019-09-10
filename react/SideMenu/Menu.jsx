import React, {Component} from 'react';

// Styling
import styles from '../../resources/css/style.scss';

class Menu extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <span className={styles.title}>
                    <i className={`${styles.fi} ${styles[this.props.icon]}`}></i>
                    {this.props.title}
                </span>
                {this.props.children.map((v, k) => {
                    if(typeof v === "string") {
                        return <a key={k} href="#">{v}</a>;
                    } else {
                        return(
                            <a key={k} href="#">
                                {v[0]}
                                <span className={styles.counter}>{v[1]}</span>
                            </a>
                        );
                    }
                })}
            </div>
        );
    }
}

export default Menu;