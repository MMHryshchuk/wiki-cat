import React, {useState} from 'react'
import Api from "../../api";
import {useCancellableEffect, useCancellationToken} from '../../hooks'
import CatWhiteIcon from '../../assets/images/cat_white.svg'
import Arrow from '../../assets/images/arrow.svg'
import {Search} from "./components/Search";
import {BreedList, BreedPreview} from "./components/BreedList";
import {AboutArticle} from "./components/AboutArticle";
import {useHistory} from "react-router-dom";


export const MainPage: React.FC = () => {

    const [breeds, setBreeds] = useState<BreedPreview[]>([]);
    const cancellationToken = useCancellationToken();

    const history = useHistory();

    useCancellableEffect(async () => {

        const getBreedList = async () => {
            try {
                const breedsResponse = await Api.breeds.getBreeds();
                const getBreads = () => Promise.all(breedsResponse.data.map(async (item: BreedPreview) => {
                    const imageResponse = await Api.breeds.getBreedById(item.id);
                    let {id, url} = imageResponse.data[0];
                    item.image = {id, url};
                    return item
                }));
                const data: any = await getBreads();
                if (cancellationToken.isCancelled) return;
                setBreeds(data);
            } catch (e) {
                console.log(e);
            }
        };
        getBreedList();
    }, [setBreeds], cancellationToken);


    const openMore = () => {
        history.push('/breeds/top')
    };

    return (
        <>
            <div className="main-search__container">
                <div className="main-search__wrapper">
                    <div className="main-search__content">
                        <div className="main-search__logo">
                            <div className="main-search__title">CatWiki</div>
                            <img className="main-search__icon" src={CatWhiteIcon} alt="SomeImage"/>
                        </div>
                        <div className="main-search_text">Get to know more about your &#13;&#10; cat breed</div>
                        <Search/>
                    </div>

                </div>
                <div className="main-search__bg"/>
            </div>
            <div className="most__container">
                <div className="most__header">Most Searched Breeds</div>
                <div className="divider"/>
                <div className="most__wrapper">
                    <div className="most__wrapper-text">66+ Breeds for you to discover</div>
                    <div onClick={openMore} className="most__wrapper-more">see more
                        <img src={Arrow} alt="arrow"/>
                    </div>
                </div>

                <BreedList breeds={breeds}/>

            </div>
            <AboutArticle/>
        </>
    )
};