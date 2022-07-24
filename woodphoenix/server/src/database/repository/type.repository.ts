interface Writer<T> {
  create(data: T): Promise<T | void>;
  delete(data: Partial<T>): Promise<boolean>;
}

interface Reader<T> {
  findAll(): Promise<T[] | void>;
  exists(data: Partial<T>): Promise<T[] | void>;
}

export type Repository<T> = Reader<T> & Writer<T>;
