require('dotenv').config();
const fetch = require('node-fetch');

async function getGenres() {
    try {
        const url = 'https://api.themoviedb.org/3/genre/movie/list';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhNDkxOGQ4YTViZDBmZGQ2YWQxOTJhNDA4OWYzMCIsIm5iZiI6MTczOTc5NTIzOS4yMTQwMDAyLCJzdWIiOiI2N2IzMmIyNzNhZmMxMWE1YmQ2ZGFmZGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GvRUI5XyBVyrvAMr1Tt3p5bK-uLy-8UBsJeWxQdj-_k'
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

async function searchMovies(query) {
    try {
        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhNDkxOGQ4YTViZDBmZGQ2YWQxOTJhNDA4OWYzMCIsIm5iZiI6MTczOTc5NTIzOS4yMTQwMDAyLCJzdWIiOiI2N2IzMmIyNzNhZmMxMWE1YmQ2ZGFmZGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GvRUI5XyBVyrvAMr1Tt3p5bK-uLy-8UBsJeWxQdj-_k'
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

module.exports = {
    getGenres,
    searchMovies
};