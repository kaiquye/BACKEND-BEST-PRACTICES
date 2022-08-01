import { PrismaClient } from '@prisma/client';
import AdapterMessageRepository from './adapters/RepositoryAdapter';

class MessageRepository extends AdapterMessageRepository {
  constructor() {
    super('MESSAGES', new PrismaClient());
  }
}

export default MessageRepository;
