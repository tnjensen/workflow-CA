import { login } from '../js/api/auth/login';
import { save } from '../js/storage';
const MOCK_TOKEN = 1;
let store = {};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([{ MOCK_TOKEN }]),
});

global.fetch = mockFetchSuccess;

const mockLocalStorage = {
  setItem: jest
    .fn()
    .mockImplementation((key, value) => (store[key] = JSON.stringify(value))),
};

global.localStorage = mockLocalStorage;

describe('login user', () => {
  it('logs the user in and saves the token', async () => {
    const response = await login();
    expect(response.length).toEqual(MOCK_TOKEN);
    save('token', response[0]);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'token',
      JSON.stringify(response[0]),
    );
  });
});
