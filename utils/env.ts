export const ENV = process.env.TEST_ENV || 'qa';

const config = {
  qa: {
    baseURL: 'https://www.saucedemo.com'
  }
};

export default config[ENV];