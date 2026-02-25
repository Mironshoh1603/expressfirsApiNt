class AppError extends Error {
  constructor(statusCode, message, stack) {
    super(message, stack);
    this.statusCode = statusCode;
  }
}

export default AppError;
