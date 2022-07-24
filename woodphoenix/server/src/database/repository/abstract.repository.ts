import { PrismaClient } from '@prisma/client';
import { Repository } from './type.repository';

export default abstract class AbstractRepository<T> implements Repository<T> {
  public prisma: PrismaClient;
  private tableName: string;

  constructor(tableName: string, ORM: PrismaClient) {
    this.tableName = tableName;
    this.prisma = ORM;
  }

  create(data: T): Promise<void | T> {
    return this.prisma[this.tableName].create({ data });
  }

  delete(data: Partial<T>): Promise<boolean> {
    return Promise.resolve(false);
  }

  exists(data: Partial<T>): Promise<T[] | void> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<T[] | void> {
    return Promise.resolve(undefined);
  }
}
