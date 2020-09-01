import React from 'react'
import {BreedPreview} from "../../../hooks/useCats";



type BreedListProps = {
    breeds: BreedPreview[],
}

type BreedItemProps = {
    breed: BreedPreview,
}

export const BreedList: React.FC<BreedListProps> = ({breeds}) => {

    return (
        <div className="most__list">
            {
                breeds.map((item: BreedPreview) => {
                    return <BreedItem key={item.id} breed={item}/>
                })
            }
        </div>
    )
};

export const BreedItem: React.FC<BreedItemProps> = ({breed}) => {

    return (
        <div className="list-item">
            <img src={breed.image.url} className="item-image" alt={breed.name}/>
            <div className="item-title">{breed.name}</div>
        </div>
    )
};