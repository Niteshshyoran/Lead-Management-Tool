// src/utils/api.test.js
import { fetchData } from './api';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,  // Mock the response.ok property to indicate success
    json: () => Promise.resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]), // Mocked response data
  })
);

test('fetches and returns data', async () => {
  const data = await fetchData();
  
  expect(data).toEqual([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
  expect(fetch).toHaveBeenCalledTimes(1); // Check if fetch was called
});
