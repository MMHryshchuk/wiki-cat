import React from 'react'
import {BreedPreview} from "../../../hooks/useCats";
import {useHistory} from "react-router-dom";

type TopListProps = {
    breeds: BreedPreview[]
}

export const TopList: React.FC<TopListProps> = ({breeds}) => {

    const history = useHistory();

    const onItemClick = (id: string) => {
        history.push({
            pathname: `/breeds/${id}/info`,
        })
    };

    return (
        <div className="top-search__wrapper">
            {
                breeds.map((breed, index) => (
                    <div key={breed.id} className="top-search__item">
                        <img className="top-search__item-img" src={breed.image.url} alt="catItem"/>
                        <div className="top-search__item-content">
                            <div className="top-search__item-title" onClick={e =>onItemClick(breed.id)}>{`${index + 1}. ${breed.name}`}</div>
                            <div className="top-search__item-text">{breed.description}</div>
                        </div>

                    </div>

                ))
            }

        </div>
    )
};
