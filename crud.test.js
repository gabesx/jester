const request = require('supertest');
const baseUrl = 'https://reqres.in/api';

describe('Todos endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl).get('/users?page=2');

    console.log(response.body)
		expect(response.statusCode).toBe(200);
	});
});

describe('Post', () => {
	it('should return a 201 status code', async () => {
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

describe('Update', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl).put('/users/2')
		.send({
    "name": "Joko",
    "job": "Babu"
  })
  .set('Accept', 'application/json')

    console.log(response.body)
		expect(response.statusCode).toBe(200);
	});
});

describe('PATCH', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl).patch('/users/2')
		.send({
    "name": "morpheus",
    "job": "Lead"
  })
  .set('Accept', 'application/json')

    console.log(response.body)
		expect(response.statusCode).toBe(200);
	});
});

describe('DELETE', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl).delete('/users/2')
		.send({
    "name": "morpheus",
    "job": "Lead"
  })
  .set('Accept', 'application/json')

    console.log(response.body)
		expect(response.statusCode).toBe(204);
	});
});
