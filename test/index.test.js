//const jest = require('jest');
const app = require('../src/app');
const supertest = require('supertest')
const api = supertest(app);

test('post are returned as json', async() => {
  await api
  .get('/api/todo/all')
  .expect(200)
  .expect('Content-Type', /application\/json/)
})

// test('home restun text/html', async() => {
//   await api.get('/')
//   .expect('Content-Type', /text\/html/)
// })