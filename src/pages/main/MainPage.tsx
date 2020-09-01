import React from 'react'
import {useCats} from '../../hooks'
import {Arrow, CatWhite} from '../../images'
import {Search} from "./components/Search";
import {BreedList} from "./components/BreedList";
import {AboutArticle} from "./components/AboutArticle";
import {useHistory} from "react-router-dom";
import {WikiLoader} from "../../components/ui/WikiLoader";


export const MainPage: React.FC = () => {


    const history = useHistory();
    const {isLoading, breeds} = useCats({limit:4});

    const openMore = () => {
        history.push('/breeds/top')
    };

    return (
        <>
            {isLoading && <WikiLoader className={'fixed-loader'}/>}
            <div className="container">
                <div className="main__container">
                    <div className="main__block">
                        <div className="search-content">
                            <div className="content-logo">
                                <div className="logo__title">CatWiki</div>
                                <img className="logo__icon" src={CatWhite} alt="SomeImage"/>
                            </div>
                            <div className="content-text">Get to know more about your &#13;&#10; cat breed</div>
                            <Search/>
                        </div>

                    </div>
                    <div className="main__bg"/>
                    <img src="" alt=""/>
                </div>
                <div className="most__container">
                    <div className="most__content">
                        <div className="most__text">Most Searched Breeds</div>
                        <div className="divider"/>
                        <div className="most__block">
                            <div className="block-text">66+ Breeds for you to discover</div>
                            <div onClick={openMore} className="block-more">see more
                                <img src={Arrow} alt="arrow"/>
                            </div>
                        </div>
                    </div>

                    <BreedList breeds={breeds}/>

                </div>
                <AboutArticle/>
            </div>
        </>
    )
};