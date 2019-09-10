import React, {Component} from 'react';

// * Components
import Slide from './Slide';

// * Resources
import styles from '../../resources/css/style.scss';
import images from '../../resources/images/*/*/*.png';

class Slider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 0,
            fade: false,
            timer: this.props.timer * 1000 + 1350,
            time: Date.now(),
        }
    }

    changeSlide = () => {
        let max = this.props.sliders.length,
            next = (this.state.active + 1) == max ? 0 : this.state.active + 1;
        console.log(this.state.timer);
        this.setState(state => ({
            next: next,
            fade: true,
            timeout: setTimeout(this.finishChange, 1350),
            time: Date.now()
        }));
    }

    finishChange = () => {
        this.setState(state => ({
            fade: false,
            active: state.next
        }));
    }

    mlChangeSlide = () => {
        let timer = this.props.timer * 1000 + 1350;
        this.changeSlide();
        this.setState(state => ({
            interval: setInterval(this.changeSlide, timer),
            timeout: clearTimeout(state.timeout, this.mlChangeSlide),
            timer: timer,
        }));
    }

    mouseEnter = () => {
        this.setState(state => ({
            interval: clearInterval(state.interval, this.changeSlide),
            timeout: clearTimeout(state.timeout, this.finishChange),
            timer: state.timer - (Date.now() - state.time),
        }));
    }

    mouseLeave = () => {
        this.setState(state => ({
            timeout: setTimeout(this.mlChangeSlide, state.timer),
        }));
    }

    componentDidMount() {
        this.setState(state => ({
            interval: setInterval(this.changeSlide, state.timer),
        }));
    }

    render() {
         return(
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={styles.slider} style={{height: this.props.height}}>
                <div>
                    {this.props.sliders.map((v, k) => {
                        return (
                            <Slide  key={v.name}
                                    cover={images[v.type][v.name].cover} 
                                    logo={images[v.type][v.name].logo} 
                                    next={`${this.state.next == k ? ` ${styles.next}`:""}`} 
                                    fade={`${(this.state.fade && (this.state.active == k)) ? ` ${styles.fade}`:''}`} 
                                    active={`${(!this.state.fade && (this.state.active == k)) ? ` ${styles.active}`:""}`} 
                                    options={`${(this.state.fade && (this.state.active == k)) ? ` ${styles.remove}`:''}`}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Slider;