import {useState} from "react";
import {useCancellableEffect, useCancellationToken} from "./useCancellable";
import Api from "../api";


export interface BreedPreview {
    id: string;
    name: string,
    description: string,
    image: {
        id: string,
        url: string
    }
}

interface CatsData {
    breeds: BreedPreview[],
    isLoading: boolean
}

type UseCatsProps = {
    limit: number
}

export const useCats = ({limit}: UseCatsProps): CatsData => {
    const [breeds, setBreeds] = useState<BreedPreview[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const cancellationToken = useCancellationToken();


    useCancellableEffect(async () => {

        const getBreedList = async () => {
            try {
                const breedsResponse = await Api.breeds.getBreeds(limit);
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
            } finally {
                setIsLoading(false)
            }
        };
        getBreedList();
    }, [], cancellationToken);

    return {breeds, isLoading } as CatsData
}