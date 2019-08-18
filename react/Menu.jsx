import React, {Component} from 'react';

import styles from "../resources/css/style.css";

class Menu extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <span className={styles.title}>
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