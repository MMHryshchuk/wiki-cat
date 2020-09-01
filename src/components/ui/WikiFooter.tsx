import React from 'react';
import CatWhiteIcon from '../../images/cat_white.svg'

export const WikiFooter: React.FC = () => {


    return (
        <footer className="footer-container container">
            <div className="footer-content">
                <div className="footer-block">
                    <div className="footer-title">CatWiki</div>
                    <img className="footer-icon" src={CatWhiteIcon} alt="Wiki"/>
                </div>
                <div className="footer-text">© Mykola Hryshchuk - devchalange.io 2020</div>
            </div>
        </footer>
    )
}