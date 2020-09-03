const request = require('supertest');
const app = require('../../src/shared/infra/http/app');

describe('Health Route', () => {
  it('should be recieve a 200 status when request a health route', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
  });
});
