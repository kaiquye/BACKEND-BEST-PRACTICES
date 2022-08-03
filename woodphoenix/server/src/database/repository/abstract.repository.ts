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

  delete(data: Partial<T>): Promise<boolean | any> {
    return this.prisma.rANDOM_MESSAGES.deleteMany({
      where: data,
    });
  }

  exists(data: Partial<T>): Promise<T[] | void | any> {
    return this.prisma[this.tableName].findFirst({
      where: data,
    });
  }

  findAll(): Promise<T[] | void> {
    return this.prisma[this.tableName].findMany();
  }

  findOne(where: Partial<T>): Promise<T | void | any> {
    return this.prisma[this.tableName].findFirst({
      where: where,
    });
  }
}
