// const API_URL = 'http://localhost:3344';
const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';

async function fetchApi(url) {
  const response = await fetch(url);
  if (response.status >= 200 && response.status < 300) {
    const { Response, Error: errorMessage, ...body } = await response.json();
    if (Response !== "False") {
      return body;
    } else {
      const error = new Error(errorMessage);
      error.response = response;
      throw error;
    }
  }
  const errorMessage = await response.text();
  const error = new Error(errorMessage);
  error.response = response;
  throw error;
}

export function fetchMovie(id) {
  return fetchApi(`${API_URL}?apikey=${API_KEY}&i=${id}`);
}

export function searchMovies(text, page = 1) {
  console.log(`[DEBUG]: searching movie via remote API page: ${page}`);
  // Note: In poduction add fetch polyfill
  return fetchApi(
    `${API_URL}?apikey=${API_KEY}&s=${text}&type=movie&page=${page}`
  );
}
