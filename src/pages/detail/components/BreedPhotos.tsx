import React from 'react'

export interface IPhotos {
    id: string,
    url: string
}


type BreedPhotosProps = {
    photos: IPhotos[],
}


export const BreedPhotos: React.FC<BreedPhotosProps> = ({photos}) => {

    return (
        <div className="photos-container">
            <div className="photos-title">Other photos</div>
            <div className="photos-wrapper">
                {photos.map((photo: IPhotos) => (
                    <img key={photo.id} className="photos-item" src={photo.url} alt={photo.id}/>
                ))}
            </div>
        </div>
    )
};