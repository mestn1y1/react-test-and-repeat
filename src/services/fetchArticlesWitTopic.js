import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWitTopic = async (topic) => {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};

// Оголошуємо асинхронну функцію (async/await) отримання списку статей за заголовком.
// Функція виконує HTTP-запит і повертає його результат - проміс із даними.
// Обробка помилки запиту не входить до тіла функції, це виконується в місці її використання, тобто в компоненті.
