import { PrismaClient } from '@prisma/client';

import IUserRepository from './adapters/AUserRepository';

class UserRepository extends IUserRepository {
  constructor() {
    super('USERS', new PrismaClient());
  }
}

export default UserRepository;
