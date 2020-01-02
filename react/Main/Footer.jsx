import React, {Component} from 'react';

import FooterLinks from './FooterLinks';
import SocialLinks from './../SideMenu/SocialLinks';
import Logo from '../Logo';

import styles from '../../resources/css/style.scss';

export default props => {
    let footerLinks = [
        [
            'FAQ',
            'Privacy',
            'Speed Test',
            'Help Center',
        ],
        [
            'Career',
            'Cookie Preferences',
            'Legal Notices',
            'Account',
        ],
        [
            'Ways to Watch',
            'Corporate Information',
            'Original Series',
            'Media Center',
        ],
        [
            'Terms Of Use',
            'Investor Relations',
            'Contact Us',
            'Language',
        ],
    ];
    return (
        <footer>
            <FooterLinks links={footerLinks}/>
            <SocialLinks />
            <Logo className={styles.logo}/>
        </footer>
    )
};