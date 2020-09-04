import React, {useCallback, useState} from 'react';
import {useHistory} from "react-router-dom";
import _ from "lodash";
import Api from "../../../api";
import {useCancellableEffect, useCancellationToken, useDebounce, useDeviceDetect} from '../../../hooks'
import {WikiLoader} from "../../../components/ui/WikiLoader";
import {Close, SearchIcon} from "../../../images";

export interface SearchBreed {
    id: string,
    name: string
}

export const Search: React.FC = () => {
    const history = useHistory();
    const {isMobile} = useDeviceDetect();

    const [focus, setFocus] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchBreeds, setSearchBreeds] = useState<SearchBreed[]>([]);

    const cancellationToken = useCancellationToken();
    const debouncedSearchQuery = useDebounce(query, 500);
    const debouncedBlur = useCallback(_.debounce(() => {
        if (cancellationToken.isCancelled) return;
        setFocus(false);
    }, 100), []);


    useCancellableEffect(async () => {
            if (debouncedSearchQuery) {
                if (cancellationToken.isCancelled) return;

                setIsSearching(true);

                try {
                    const result = await searchBreed(debouncedSearchQuery);
                    setSearchBreeds(isEmpty(result?.data) ? [] : result.data);
                } catch (e) {
                    console.log(e);
                } finally {
                    setIsSearching(false);

                }

            } else {
                if (cancellationToken.isCancelled) return;
                setSearchBreeds([]);
            }
        }, [debouncedSearchQuery], cancellationToken
    );

    const isEmpty = (obj: Object | undefined | null): boolean => {
        if (!obj) return false;

        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    const searchBreed = async (query: string) => {
        return Api.breeds.searchBreeds(query);
    };

    const onItemClick = (breed: SearchBreed) => {
        history.push({
            pathname: `/breeds/${breed.id}/info`,
        })
    };

    const renderSearchResult = () => {
        return (
            searchBreeds.map((item: SearchBreed) => (
                <div key={item.id} onClick={() => onItemClick(item)} className="form-item">
                    <div className="item-text">{item.name}</div>
                </div>
            ))
        )
    };

    return (
        <>
            <div className="search-bar__block">
                <input
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    onBlur={debouncedBlur}
                    onFocus={() => {
                        setFocus(true);
                        setShowModal(true)
                    }}
                    className="search-input"
                    type="text"/>
                <img className="search-icon" src={SearchIcon} alt="search"/>
            </div>
            {
                isMobile ?
                    showModal &&
                    <div className="search-modal__wrapper">
                        <div onClick={() => setShowModal(false)} className="modal-btn">
                            <img src={Close} alt="close-ic"/>
                        </div>
                        <div className="modal-input">
                            <input
                                value={query}
                                onChange={event => setQuery(event.target.value)}
                                type="text"/>
                            <img src={SearchIcon} alt="search"/>
                        </div>
                        <div className="modal-list">
                            {renderSearchResult()}
                        </div>
                    </div>
                    :
                    focus &&
                    <div className="search-result__form">
                        {isSearching && <WikiLoader className={'relative-loader'}/>}
                        {renderSearchResult()}
                    </div>
            }
        </>
    )
};