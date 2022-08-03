import { PrismaClient } from '@prisma/client';
import AdapterMessageRepository from './adapters/RepositoryAdapter';
import IMessage from '../../domain/entities/message';

class MessageRepository extends AdapterMessageRepository {
  constructor() {
    super('MESSAGES', new PrismaClient());
  }

  findByTeam(team: string): Promise<IMessage[] | any> {
    return this.prisma.mESSAGES.findMany({
      where: {
        team: team,
      },
    });
  }
}

export default MessageRepository;
