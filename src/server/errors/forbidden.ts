import CustomError from '&/errors/customError';

export default class Forbidden extends CustomError {
  constructor(message: string) {
    super(401, message);
  }
}
