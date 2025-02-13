import axios from "axios"
import type { GIFResponsio } from "../Interfaces/gif.responsio"

const apikey = "ZZkQ1nhsooMUN9Y9EZMMqWBAQjZCzFt4"

export const giphyApi = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
    params: {
        api_key: apikey,
    }
})

giphyApi.get<GIFResponsio>("/random")
.then( resp => console.log(resp.data.data.images.downsized.url))
.catch( err => console.log(err))