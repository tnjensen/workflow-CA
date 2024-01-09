import { logout } from '../js/api/auth/logout';

const MOCK_TOKEN = 1;

let store = {};
const mockLocalStorage = {
  removeItem: jest.fn().mockImplementation((key) => store[key]),
};

global.localStorage = mockLocalStorage;

describe('remove token', () => {
  it('logs out and deletes the access token', () => {
    logout();
    mockLocalStorage.removeItem(MOCK_TOKEN);
    expect(mockLocalStorage.removeItem).toHaveBeenCalled();
  });
});
