import React from "react";
import ReactDOM from "react-dom";
//import jQuery from '../resources/js/jquery-3.4.1.min.js';
import cryptoRandomString from 'crypto-random-string';

// Components
import SideMenu from './SideMenu';
import Main from './Main';
import UserNav from './UserNav';

// Styling
import styles from '../resources/css/style.scss';

let App = () => (
    <div> 
        <SideMenu />
        <Main />
        <UserNav />
    </div>
);

ReactDOM.render(<App />, document.getElementById(styles.app));

/*
;(function($) {
    'use strict';
    $(`.${styles.menu}`).on({
        mouseenter: function(e) {
            let t = $(e.target),
                a = $(`.${styles.submenu}.${styles.active}`),
                h = t.data('menuhref');
            
            if(a.length) {
                a.removeClass(styles.active);
                $(`*.${styles.active}[data-menuhref="#${a.attr('id')}"]`).removeClass(styles.active);
            }

            if(h !== '#undefined') {
                let s = $(h),
                    d = $(`${h} > div`),
                    w = $(`.${styles.mainWrapper}`),
                    l = t.offset().left;
                d.css({width: `${w.outerWidth()}px`, left: `${w.offset().left - l}px`});
                t.addClass(styles.active);
                s.addClass(styles.active);
                s.css({width: `${t.outerWidth()}px`, left: `${l - 336}px`}).addClass(styles.active);
                s.on('mouseleave', function (e) {
                    t.removeClass(styles.active);
                    s.removeClass(styles.active);
                });
            }
        },
    }, '*[data-menu]');
    
  
})(jQuery); */