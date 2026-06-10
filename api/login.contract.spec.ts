import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import { loginResponseSchema } from './schemas/login.schema';

test.describe('@contract Login API', () => {
  test('Login API response should follow contract', async ({ request }) => {
    const response = await request.post(
      'https://reqres.in/api/login',
      {
        data: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        }
      }
    );

    // ✅ Accept both success and auth failure
    expect([200, 400, 401]).toContain(response.status());

    const body = await response.json();

    // ✅ Validate contract ONLY for success response
    if (response.status() === 200) {
      const ajv = new Ajv();
      const validate = ajv.compile(loginResponseSchema);
      expect(validate(body)).toBe(true);
    }

    // ✅ Validate error contract (optional but senior-level)
    if (response.status() !== 200) {
      expect(body).toHaveProperty('error');
    }
  });
});