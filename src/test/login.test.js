import { login } from '../js/api/auth/login';
const MOCK_TOKEN = 1;
let store = {};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([MOCK_TOKEN]),
});

global.fetch = mockFetchSuccess;

const mockLocalStorage = {
  setItem: jest
    .fn()
    .mockImplementation((key, value) => (store[key] = JSON.stringify(value))),
};

global.localStorage = mockLocalStorage;

describe('login user', () => {
  it('logs the user in', async () => {
    await login(() => {
      const response = MOCK_TOKEN;
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'token',
        JSON.stringify(response),
      );
    });
  });
});
