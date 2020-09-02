import React from 'react'
import {useHistory} from "react-router-dom";
import {NotFound404} from '../images'

export const NotFound: React.FC = () => {

    const history = useHistory();

    const openHome = () => {
        history.push('/')
    };

    return (
        <div className="not-found-block">
            <img src={NotFound404} alt="not-found"/>
            <div onClick={openHome} className="not-found-btn">
                Back to Home
            </div>
        </div>
    )
}