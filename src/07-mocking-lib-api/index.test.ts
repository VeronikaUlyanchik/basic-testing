// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

const baseURL = 'https://lalal.com';

jest.mock('lodash', () => ({
  __esModule: true,
  ...jest.requireActual<typeof import('lodash')>('lodash'),
  throttle: jest.fn((fn) => fn),
}));

describe('throttledGetDataFromApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create instance with provided base url', async () => {
    jest.spyOn(axios, 'create');

    axios.create({
      baseURL: baseURL,
    });

    expect(axios.create).toHaveBeenCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async () => {
    // // Write your test here
    const getSpy = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValueOnce({ data: null });
    const apiPath = '/api';

    await throttledGetDataFromApi(apiPath);

    expect(getSpy).toHaveBeenCalledWith(apiPath);

    getSpy.mockReset();
  });

  test('should return response data', async () => {
    // Write your test here
    const apiPath = '/api';
    const apiMockData = [
      {
        id: 1,
        name: 'Anna',
      },
      {
        id: 2,
        name: 'Grisha',
      },
    ];

    const getSpy = jest.spyOn(axios.Axios.prototype, 'get');
    getSpy.mockResolvedValueOnce({ data: apiMockData });

    const result = await throttledGetDataFromApi(apiPath);

    expect(result).toEqual(apiMockData);
  });
});
