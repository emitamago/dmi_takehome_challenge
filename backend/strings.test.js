const request = require('supertest');
const app = require('./app');

describe('GET /strings', function () {
    test('should response with all strings from array', async function () {
      const response = await request(app)
        .get('/strings')
      expect(response.statusCode).toBe(200);
      expect(response.body.strings).toEqual([
        "hello world",
        "good morning",
        "good evening",
        "good night"
      ]);
    });
  });
  
  describe('POST /strings', function () {
    test('should add a string to array and response with updated array', async function () {
        let response = await request(app)
          .post('/strings')
          .send({
              "newString": "test"
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.updatedStrings).toEqual([
          "hello world",
          "good morning",
          "good evening",
          "good night",
          "test"
        ]);
      });
});
  
  