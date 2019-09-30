const API_KEY = 'b947c005';

export async function fetchMovie(id) {
    const response = await fetch(
      `http://omdbapi.com?apikey=${API_KEY}&i=${id}`
    );
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    }
    const errorMessage = await response.text();
    const error = new Error(errorMessage);
    error.response = response;
    throw error;
}

export async function searchMovies(text) {
  console.log('[DEBUG]: searching movie via remote API');
  // Note: In poduction add fetch polyfill

    const response = await fetch(
      `http://omdbapi.com?apikey=${API_KEY}&s=${text}`
    );
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    }
    const errorMessage = await response.text();
    const error = new Error(errorMessage);
    error.response = response;
    throw error;
}
