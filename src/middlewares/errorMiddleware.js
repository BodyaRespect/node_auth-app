import { ApiError } from '../exceptions/api.error.js';

export function errorMiddleware(error, req, res, next) {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });
  }

  res.status(500).send({ message: 'Unexpected error occured' });
}
