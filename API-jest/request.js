const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    // Isto é um exemplo de uma requisição http, por exemplo para buscar
    // dados de usuário de uma API.
    // Este módulo está sendo simulado em __mocks__/request.js
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => data += _data);
      response.on('end', () => resolve(data));
    });
  });
}