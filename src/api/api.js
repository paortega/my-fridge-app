import axios from 'axios'
//const baseUrlCors = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com_'
const baseUrl = 'https://api.spoonacular.com'
const apiKey = 'apiKey=86450cd1f79541d29b0789eb2999965b'
export default {
    getSearchRecipes() {
        return axios({
            method: 'get',
            url: `${baseUrl}/recipes/autocomplete?${apiKey}&number=10&query=chick`,
        })
        .then(response => response.data)
    },
    getRecipes() {
        return axios({
            method: 'get',
            url: `${baseUrl}/recipes?${apiKey}`,
        })
        .then(response => response.data)
    },
    getRandomRecipes() {
        return axios({
            method: 'get',
            url: `${baseUrl}/recipes/random?${apiKey}&number=1&tags=vegetarian`,
        })
        .then(response => response.data)   
    },
    getIngredients() {
        return axios({
            method: 'get',
            url: `${baseUrl}/food/ingredients?${apiKey}&amount=1`,
        })
        .then(response => response.data)   
    },
    getComplexRecipes(data) {
        return axios({
            method: 'get',
            url: `${baseUrl}/recipes/complexSearch?${apiKey}&number=10&includeIngredients=${data}&addRecipeInformation=true`,
        })
        .then(response => response.data)
    },
    getRecipesByCousine(data) {
        return axios({
            method: 'get',
            url: `${baseUrl}/recipes/complexSearch?${apiKey}&number=10&excludeCuisine=${data}&addRecipeInformation=true`,
        })
        .then(response => response.data)
    },
    /*getPlaylist(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/playlist/${q}`,
        })
        .then(response => response.data)
    },
    getTracks(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/search/track?q=${q}`,
        })
        .then(response => response.data)
    }, 
    getAlbums(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/search/album?q=${q}`,
        })
        .then(response => response.data)
    },    
    getArtists(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/search/artist?q=${q}`,
        })
        .then(response => response.data)
    }*/

}
