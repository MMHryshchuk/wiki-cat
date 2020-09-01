import React from 'react'
import Arrow from "../../../assets/images/arrow.svg";

export const AboutArticle: React.FC = () => {

    return (
        <div className="info__container">
            <div className="info__wrapper">
                <div>
                    <div className="divider"/>
                    <div className="info__title">Why should you have a cat?</div>
                </div>
                <div className="info__text">Having a cat around you can actually trigger the release of calming
                    chemicals in your body which lower your stress and anxiety leves
                </div>
                <div className="info__more">read more
                    <img src={Arrow} alt="arrow"/>
                </div>
            </div>
            <div className="info__image-wrapper">
                <div className="image-block">
                    <div className="image-first"/>
                    <div className="image-second"/>
                </div>
                <div className="image-third"/>
            </div>

        </div>

    )
};