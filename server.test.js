import { afterAll, afterEach, beforeAll, test, expect } from 'vitest'
import application from './tests/helpers/application.js';
import mockServer from './tests/helpers/mock-server.js';
import request from 'supertest';

// Start server before all tests
beforeAll(() => mockServer.listen());
//  Close server after all tests
afterAll(() => mockServer.close());
// Reset handlers after each test `important for test isolation`
afterEach(() => mockServer.resetHandlers());

test('expect gist 0b13c4ed2a8ba0a738edce592c283b44 passthrough request', async () => {
  const id = "0b13c4ed2a8ba0a738edce592c283b44";
  const response = await request(application).get(`/application/${id}`).expect(200);

  expect(response.text).toBe('Gist URL: https://api.github.com/gists/0b13c4ed2a8ba0a738edce592c283b44');
});

test('expect gist afddf909e49961bd46cbbd80d9c12905 to return mocked request', async () => {
  const id = "afddf909e49961bd46cbbd80d9c12905";
  const response = await request(application).get(`/application/${id}`).expect(200);

  expect(response.text).toBe('Gist URL: mocked-url');
});

test('expect gist bd23a450dfdc2ed1e10092bce0887cf9 to return bypassed modified request', async () => {
  const id = "bd23a450dfdc2ed1e10092bce0887cf9";
  const response = await request(application).get(`/application/${id}`).expect(200);

  expect(response.text).toBe('Gist URL: https://api.github.com/gists/0b13c4ed2a8ba0a738edce592c283b44--bypass-modified');
});

