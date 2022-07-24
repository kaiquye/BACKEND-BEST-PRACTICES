class AppError {
  public readonly message: string | object;

  public readonly statusCode: number;

  public readonly internalCode?: string;

  constructor(
    message: string | object,
    statusCode = 400,
    internalCode?: string,
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.internalCode = internalCode;
  }
}

export default AppError;
