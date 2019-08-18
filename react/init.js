import React, {Component} from "react";
import ReactDOM from "react-dom";

// Components
import SideMenu from './SideMenu';

// Styling
import styles from '../resources/css/style.css';

class App extends Component {
    render() {
        return (
            <div> 
                <SideMenu />
                <div clasName={styles.name}>
                    kek
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("_3b37__app"));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept()
}