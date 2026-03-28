const request = require('supertest');
const app = require('../app');

describe('Express API Testsssss', () => {

  test('GET / should return Hello Worldsssssssssss', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World111');
  });

  test('POST / should return Hello + name', async () => {
    const res = await request(app)
      .post('/')
      .send({ name: 'Ayham' });

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Ayham');
  });

});