import React from 'react';
import CatIcon from "../../images/cat.svg"
import {useHistory} from "react-router-dom";

export const WikiHeader: React.FC = () => {

    const history = useHistory();

    const openMainPage = () => {
        history.push('/')
    };

    return (
        <header className="header__container container">
            <div className="header__wrapper" onClick={openMainPage}>
                <div className="logo-text">CatWiki</div>
                <img className="logo-icon" src={CatIcon} alt="React Logo"/>
            </div>
        </header>
    )
};