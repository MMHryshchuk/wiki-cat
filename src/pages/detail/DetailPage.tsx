import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import Api from '../../api'
import {useCancellableEffect, useCancellationToken} from '../../hooks'
import {BreedInformation, IBreed} from "./components/BreedInformation";
import {BreedPhotos, IPhotos} from "./components/BreedPhotos";
import {WikiLoader} from "../../components/ui/WikiLoader";
import {NotFound} from "../../components/NotFound";


export interface DetailPageParams {
    id: string
}

export const DetailPage: React.FC = () => {

    const params = useParams<DetailPageParams>();

    const [breed, setBreed] = useState<IBreed>();
    const [isExist, setIsExist] = useState<boolean>(true);
    const [isSearching, setIsSearching] = useState<boolean>(true);
    const [photos, setPhotos] = useState<IPhotos[]>([]);
    const cancellationToken = useCancellationToken();


    useCancellableEffect(() => {
        const loadBreed = async () => {
            try {
                const result = await Api.breeds.getBreedById(params.id);
                let photos = result.data;
                let breed = photos[0].breeds[0];
                breed.image = photos[0].url;

                if (photos.length > 8) photos.shift();

                if (cancellationToken.isCancelled) return;

                setBreed(breed);
                setPhotos(photos)
            } catch (e) {
                setIsExist(false);
                console.log(e);
            } finally {
                setIsSearching(false)
            }
        };
        loadBreed()
    }, [], cancellationToken);


    return (
        <div className="container">

            {isSearching && <WikiLoader className={'fixed-loader'}/>}

            {isExist ?
                <>
                    <BreedInformation breed={breed}/>
                    <BreedPhotos photos={photos}/>
                </>
                :
                <NotFound/>
            }


        </div>
    )
};