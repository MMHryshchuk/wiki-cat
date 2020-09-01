import React, {useCallback, useState} from 'react';
import {useHistory} from "react-router-dom";
import _ from "lodash";
import Api from "../../../api";
import {useCancellationToken, useDebounce, useCancellableEffect} from '../../../hooks'
import {WikiLoader} from "../../../components/ui/WikiLoader";
import SearchIcon from "../../../assets/images/search.svg";

export interface SearchBreed {
    id: string,
    name: string
}

export const Search: React.FC = () => {
    const history = useHistory();


    const [focus, setFocus] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchBreeds, setSearchBreeds] = useState<SearchBreed[]>([]);

    const cancellationToken = useCancellationToken();
    const debouncedSearchQuery = useDebounce(query, 500);
    const debouncedBlur = useCallback(_.debounce(() => {
        if (cancellationToken.isCancelled) return;
        setFocus(false)
    }, 100), []);


    useCancellableEffect(async () => {
            if (debouncedSearchQuery) {
                if (cancellationToken.isCancelled) return;
                setIsSearching(true);
                searchBreed(debouncedSearchQuery).then(results => {
                    setIsSearching(false);
                    setSearchBreeds(results.data);
                });
            } else {
                if (cancellationToken.isCancelled) return;
                setSearchBreeds([]);
            }
        }, [debouncedSearchQuery], cancellationToken
    );

    const searchBreed = async (query: string) => {
        try {
            return Api.breeds.searchBreeds(query);
        } catch (e) {
            console.log(e);
        }
    };

    const onItemClick = (breed: SearchBreed) => {
        console.log(breed);
        history.push({
            pathname: `/breeds/${breed.id}/info`,
        })
    };

    return (
        <>
            <div>
                <input
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    onBlur={debouncedBlur}
                    onFocus={() => setFocus(true)}
                    className="main-search-input"
                    type="text"/>
                <img className="main-search-input-icon" src={SearchIcon} alt="search"/>
            </div>
            {
                focus &&
                <div className="main-search-result-form">
                    {
                        isSearching &&
                        <WikiLoader/>
                    }
                    {
                        searchBreeds.map((item: SearchBreed) => (
                            <div key={item.id} onClick={() => onItemClick(item)} className="result-form__item">
                                <div className="result-form__item-text">{item.name}</div>
                            </div>
                        ))
                    }
                </div>
            }
        </>
    )
};