import axios from 'axios';
axios.defaults.baseURL = `https://65bccb30b51f9b29e9324a6b.mockapi.io/`;

// Запит для отримання колекції за пошуком

export const getMoviesBySearch = async (query, page) => {
  const { data } = await axios(`/search/movie?query=${query}&api_key=`);
  return data;
};

// Запит для отримання колекції популярних

export const getAllCars = async () => {
  const { data } = await axios(`/adverts`);
  return data;
};

// Запит для отримання детальної інформації про фільм

export const getDetailsMoviesById = async id => {
  const { data } = await axios(`/movie/${id}?api_key=`);
  return data;
};

// Запит для отримання детальної інформації про акторів

export const getDetailsMoviesCast = async id => {
  const { data } = await axios(`/movie/${id}/credits?api_key`);
  return data;
};

// Запит для отримання детальної інформації про огляди

export const getDetailsMoviesReviews = async id => {
  const { data } = await axios(`/movie/${id}/reviews?api_key`);
  return data;
};
