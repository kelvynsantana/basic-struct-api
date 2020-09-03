class AppError {
  constructor(message, statusCode = 400, error = true) {
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}

module.exports = AppError;
