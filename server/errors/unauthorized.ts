import CustomError from './customError';

export default class Unauthorized extends CustomError {
  constructor(message: string) {
    super(401, message);
  }
}
