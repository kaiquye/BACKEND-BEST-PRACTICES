export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: string;
  public _value: T;
  public status: number;

  private constructor(
    isSuccess: boolean,
    error?: string,
    value?: T,
    status?: number,
  ) {
    if (isSuccess && error) {
      throw new Error(`InvalidOperation: A result cannot be 
        successful and contain an error`);
    }
    if (!isSuccess && !error) {
      throw new Error(`InvalidOperation: A failing result 
        needs to contain an error message`);
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;
    this.status = status;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(`Cant retrieve the value from a failed result.`);
    }

    return this._value;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value, 200);
  }

  public static fail<U>(error: string, status_ = 500): Result<U> {
    return new Result<U>(false, error, null, status_);
  }
}
