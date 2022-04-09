const request = require('supertest');

describe('GET /user', function() {
  it('responds with json', function() {
    const response = request('https://reqres.in/api').get('/users?page=2');

    console.log(response)
  });
});
