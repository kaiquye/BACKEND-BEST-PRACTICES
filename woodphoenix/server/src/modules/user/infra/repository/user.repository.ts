import { PrismaClient } from '@prisma/client';

import AbstractRepository from '../../../../database/repository/abstract.repository';
import IUser from '../../domain/entities/user.interface';
import IUserRepository from '../adapters/AUserRepository';

class UserRepository extends IUserRepository {
  constructor() {
    super('USERS', new PrismaClient());
  }
}

export default UserRepository;
