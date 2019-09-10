import React, {Component} from "react";

import Search from './Search';
import Menu from './Menu';

class Header extends Component {
    render() {
        return(
            <header>
                <Search />
                <Menu />
            </header>
        );
    }
}

export default Header;