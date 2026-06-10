export const loginResponseSchema = {
  type: 'object',
  properties: {
    token: { type: 'string' }
  },
  required: ['token'],
  additionalProperties: true
};