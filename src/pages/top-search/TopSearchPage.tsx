import React from 'react';
import ReIm from '../../assets/images/cat_item.png'

export const TopSearchPage: React.FC = () => {

    return (
        <div className="top-search__container">
            <div className="top-search__title">Top 10 most searched breeds</div>
            <div className="top-search__wrapper">
                <div className="top-search__item">
                    <img className="top-search__item-img" src={ReIm} alt=""/>
                    <div className="top-search__item-content">
                        <div className="top-search__item-title">1. Bengal</div>
                        <div className="top-search__item-text">Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</div>
                    </div>
                </div>
                <div className="top-search__item">
                    <img className="top-search__item-img" src={ReIm} alt=""/>
                    <div className="top-search__item-content">
                        <div className="top-search__item-title">1. Bengal</div>
                        <div className="top-search__item-text">Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</div>
                    </div>
                </div>
                <div className="top-search__item">
                    <img className="top-search__item-img" src={ReIm} alt=""/>
                    <div className="top-search__item-content">
                        <div className="top-search__item-title">1. Bengal</div>
                        <div className="top-search__item-text">Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}