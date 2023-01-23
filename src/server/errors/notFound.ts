import CustomError from '&/errors/customError';

export default class Not_Found extends CustomError {
  constructor(message: string) {
    super(404, message);
  }
}
