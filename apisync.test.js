//const request = require('supertest');
////import request from "supertest";
//const baseUrl = 'https://reqres.in/api';
//const app = require("../app");
//
////describe('GET /user', function() {
////  it('responds with json', function() {
////    const response = request(baseUrl).get('/users?page=2');
////
////    console.log(response.body)
////    expect(response.statusCode).toBe(200);
////  });
////});
//
//describe('Space test suite', () => {
//    it('tests /destinations endpoints', async() => {
//        const response = await request(app).get(baseUrl);
////        expect(response.body).toEqual(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"]);
////        expect(response.body).toHaveLength(6);
//        expect(response.statusCode).toBe(200);
//        // Testing a single element in the array
////        expect(response.body).toEqual(expect.arrayContaining(['Earth']));
//
//    });
//
//    // Insert other tests below this line
//
//    // Insert other tests above this line
//});


const request = require('supertest');
const baseUrl = 'https://reqres.in/api';

describe('Ini nyoba api', () => {
	it('return 200 status code', async () => {
		const response = await request(baseUrl).get('/users?page=2');

    console.log(response.body)
    expect(response.statusCode).toBe(200);
  });
});

describe('Post', () => {
	it('return a 201 status code', async () => {
		const response = await request(baseUrl).post('/users')
		.send({
    "name": "morpheus",
    "job": "leader"
  })
  .set('Accept', 'application/json')

    console.log(response.body)
		expect(response.statusCode).toBe(201);
	});
});

describe('Put', () => {
	it('return a 200 status code', async () => {
		const response = await request(baseUrl).put('/users')
		.send({
    "name": "morpheus",
    "job": "leader"
  })
  .set('Accept', 'application/json')

    console.log(response.body)
		expect(response.statusCode).toBe(200);
	});
});

describe('GET /user', function() {
  it('responds with json', function() {
    const response = request('https://reqres.in/api').get('/users?page=2');

    console.log(response)
    expect(response.statusCode).toBe(200);
  });
});