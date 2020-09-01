import React from 'react'

export interface BreedPreview {
    id: string;
    name: string,
    image: {
        id: string,
        url: string
    }
}

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
        <div className="most__list-item">
            <img src={breed.image.url} className="most__list-item-image" alt={breed.name}/>
            <div className="most__list-item-title">{breed.name}</div>
        </div>
    )
};