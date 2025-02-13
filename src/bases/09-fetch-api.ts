import { GIFResponsio } from "../Interfaces/gif.responsio"


const apikey = "ZZkQ1nhsooMUN9Y9EZMMqWBAQjZCzFt4"

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
    .then( resp => resp.json())
    .then( (body: GIFResponsio) => {
        console.log(body.data.images.downsized_still.url)
    } )
    .catch( err => console.log(err))

    // https://api.giphy.com/v1/gifs/random?api_key=ZZkQ1nhsooMUN9Y9EZMMqWBAQjZCzFt4