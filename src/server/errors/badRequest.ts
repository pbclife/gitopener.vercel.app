import CustomError from '&/errors/customError';

export default class Bad_Request extends CustomError {
  constructor(message: string) {
    super(400, message);
  }
}
