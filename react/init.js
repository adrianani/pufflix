import React, {Component} from "react";
import ReactDOM from "react-dom";
import jQuery from '../resources/js/jquery-3.4.1.min.js';
import cryptoRandomString from 'crypto-random-string';

// Components
import SideMenu from './SideMenu';
import Main from './Main';
import UserNav from './UserNav';

// Styling
import styles from '../resources/css/style.scss';

console.log(`%c ${styles.app}`, "font-weight: bold; font-size: 14px; color: orange;");

class App extends Component {

    render() {
        return (
            <div> 
                <SideMenu />
                <Main />
                <UserNav />
                <template id={styles.tooltip}>
                    <div className={styles.tooltip}>
                        <header></header>
                        <main></main>
                    </div>
                </template>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById(styles.app));

/**
 * * jQuery script
 */

;(function($) {
    'use strict';

    let app = $(`#${styles.app} > div`),
        templates = {
            tooltip: $(`#${styles.tooltip} > div`),
        };
        
    /**
     * Handle tooltips
     */
    $(document).on({
        mouseenter: function(e) {
            let t = $(e.target);
            
            if(!t.data('tooltipid')) {
                let tt = t.data('tooltiptitle'),
                    tc = t.data('tooltipcontent'),
                    tT = templates.tooltip.clone(),
                    tp = t.offset(),
                    td = `tt_${cryptoRandomString({length: 4})}`;

                t.data('tooltipid', td);
                tT.attr('id', td);            

                app.append(tT);
                tT = $(`#${td}`);
                tt = tT.find('header').html(tt);
                tt.css({width: tt.outerWidth()});
                tc = tT.find('main').html(tc);

                tT.css({
                    left: `${(tp.left > tT.outerWidth()) ? tp.left - (tT.outerWidth() / 2 - t.outerWidth() / 2) : tp.left + (t.outerWidth() + 20)}px`,
                    top: `${(tp.left > tT.outerWidth()) ? tp.top - (tT.outerHeight() + 10) : tp.top - (tT.outerHeight() / 2 - t.outerHeight() / 2)}px`
                });
                tT.addClass(styles.visible);
            }
        },
        mouseleave: function(e) {
            let t = $(e.target), i;
            if(i = t.data('tooltipid')) {
                t.data('tooltipid', null);
                $(`#${i}`).removeClass(styles.visible);
                setTimeout(() => {
                    $(`#${i}`).remove();
                }, 250);
            }
        }
    }, '*[data-tooltip]');

    /** 
     * Menu popup handler
    */
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
    
  
})(jQuery);