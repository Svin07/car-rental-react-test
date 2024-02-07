import axios from 'axios';
axios.defaults.baseURL = `https://65bccb30b51f9b29e9324a6b.mockapi.io/`;

// Запит для отримання колекції за пошуком

export const getCarsBySearch = async query => {
  const { data } = await axios.get(`/adverts?search=${query}`);
  return data;
};

// Запит для отримання всієї колекції авто

export const getAllCars = async page => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
  return data;
};

// Запит для отримання детальної інформації про авто за id

export const getCarById = async id => {
  const { data } = await axios.get(`/adverts/?id=${id}`);
  return data;
};

// Додавання до списку обраного

// export const putInFavorites = async (id, obj) => {
//   const { data } = await axios.patch(`/adverts/?id=${id}`, obj);
//   return data;
// };

// Видалення зі списку обраного

// export const deleteInFavorites = async (id, obj) => {
//   const { data } = await axios.delete(`/adverts/?id=${id}`, obj);
//   return data;
// };

// Запит для отримання детальної інформації про обрані за id

// export const getFavoritesById = async id => {
//   const { data } = await axios.get(`/favorites?id=${id}`);
//   return data;
// };

// Запит для отримання колекції обраного за пошуком id

// export const getFavoritesBySearch = async query => {
//   const { data } = await axios.get(`/favorites?search=${query}`);
//   return data;
// };

// Запит для отримання всієї колекції обраного

// export const getFavorites = async id => {
//   const { data } = await axios.get(`/favorites`);
//   return data;
// };
