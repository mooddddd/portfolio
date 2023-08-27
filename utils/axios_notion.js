import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.notion.com/v1/databases/4eceaa4c37fc4250b2bd2b6a3be8f9f9',
  headers: { accept: 'application/json', 'Notion-Version': '2022-06-28' },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
