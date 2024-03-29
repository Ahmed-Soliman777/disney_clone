import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "c8105bdc3565782ae1a078e0d5524340"

const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=c8105bdc3565782ae1a078e0d5524340"

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/movie/day?api_key=" + api_key)
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl + "&with_genres=" + id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}
