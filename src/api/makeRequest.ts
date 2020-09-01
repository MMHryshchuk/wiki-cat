import axios from 'axios'

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/'

export default ({
                    url = '/',
                    method = 'GET',
                    params = {},
                    data = {},
                    header = {
                        'x-api-key': 'DEMO-API-KEY'
                    },
                }) => {
    // @ts-ignore
    return axios({
        url,
        method,
        header,
        params,
        data
    });
}