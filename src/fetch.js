import axios from 'axios';

const API_KEY = '39757388-a65df115d940ef15f6c002f17';
const URL = 'https://pixabay.com/api/';

async function fetchImg(searchQuery, page, perPage) {
  const response = await axios.get(
    `${URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
}
export { fetchImg };
