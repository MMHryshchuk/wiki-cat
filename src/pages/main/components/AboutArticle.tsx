import React from 'react'
import {Arrow, CatImg1, CatImg2, CatImg3} from "../../../images";

export const AboutArticle: React.FC = () => {

    return (
        <div className="info__container">
            <div className="info__content">
                <div>
                    <div className="divider"/>
                    <div className="info-title">Why should you have a cat?</div>
                </div>
                <div className="info-text">Having a cat around you can actually trigger the release of calming
                    chemicals in your body which lower your stress and anxiety leves
                </div>
                <div className="info-more">read more
                    <img src={Arrow} alt="arrow"/>
                </div>
            </div>
            <div className="info__image-wrapper">
                <div className="image-block">
                    <img src={CatImg1} alt="cat-img" className="first"/>
                    <img src={CatImg3} alt="cat-img" className="second"/>
                </div>
                <img src={CatImg2} className="image-third" alt="cat-img"/>
            </div>

        </div>

    )
};