import axios from 'axios';

export class jsonPlaceholderAPI {
  searchName = null;
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '35236008-ec0292df86782f7461c0757b8';
  query = null;
  page = 1;
  per_page = 40;

  async fetchPictures() {
    try {
      return await axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}`, {
        params: {
          q: this.searchName,
          page: this.page,
          per_page: this.per_page,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      });
    } catch (err) {
      throw new Error(err.massage);
    }
  }
}

//   .then(res => {
//   if (!res.ok) {
//     throw new Error(res.status);
//   }

//   return res.json();
// });
//   }
// }
