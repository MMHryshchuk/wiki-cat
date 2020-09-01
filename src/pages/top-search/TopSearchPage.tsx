import React from 'react';
import {TopList} from "./components/TopList";
import {useCats} from "../../hooks";
import {WikiLoader} from "../../components/ui/WikiLoader";


export const TopSearchPage: React.FC = () => {

    const {isLoading, breeds} = useCats({limit:10});



    return (
        <>
            {isLoading && <WikiLoader className="fixed-loader"/>}
            <div className="top-search__container container">
                <div className="top-search__title">Top 10 most searched breeds</div>
                <TopList breeds={breeds}/>
            </div>
        </>
    )
}