import React from 'react';
import logo from '../../assets/images/cat.svg'

export const WikiLoader: React.FC = () => {
    return (
        <div className="wiki-loader">
            <img src={logo} className="wiki-logo" alt="logo" />
        </div>
    )
}