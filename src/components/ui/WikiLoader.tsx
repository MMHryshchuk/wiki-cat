import React from 'react';
import logo from '../../images/cat.svg'

type WikiLoaderProps = {
    className: string
}

export const WikiLoader: React.FC<WikiLoaderProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={logo} className="wiki-logo" alt="logo" />
        </div>
    )
}