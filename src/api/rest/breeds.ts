import makeRequest from "../makeRequest";


export const getBreeds =  () => {
    return  makeRequest({
        url: 'breeds',
        params: {
            limit: 4
        }
    })
};

export const getBreedById = (breedId: string) => {
   return makeRequest({
       url: 'images/search',
       params: {
           size: 'small',
           breed_ids: breedId,
           limit: 9
       }
   })
};

export const searchBreeds = (query: string) => {
    return makeRequest({
        url: 'breeds/search',
        params: {
            q: query
        }
    })
};