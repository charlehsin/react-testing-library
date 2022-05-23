import { runFetch } from './fetch-service';

const unmockedFetch = global.fetch;

afterAll(() => {
  global.fetch = unmockedFetch
});

describe('When fetch runs ok', () => {
  test('should return the expected object', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ test: 100 })
      }),
    ) as jest.Mock;

    const result = await runFetch('api/test', {});
    expect(result).toEqual({ test: 100 });
  });
});

describe('When fetch fails', () => {
  test('should throw exception', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400
      }),
    ) as jest.Mock;

    let error = undefined;
    try {
      await runFetch('api/test', {});
    } catch (err: any) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.ok).toBeFalsy();
    expect(error.status).toEqual(400);
  });
});