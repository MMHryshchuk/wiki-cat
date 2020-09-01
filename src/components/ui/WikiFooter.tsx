import React from 'react';
import CatWhiteIcon from '../../assets/images/cat_white.svg'

export const WikiFooter: React.FC = () => {


    return (
        <footer className="footer-container">
            <div className="footer__title-block">
                <div className="footer__title">CatWiki</div>
                <img className="logo-icon" src={CatWhiteIcon} alt="Wiki"/>
            </div>
            <div className="footer__text">© Mykola Hryshchuk - devchalange.io 2020</div>
        </footer>
    )
}