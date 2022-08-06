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

  update(message: Partial<IMessage>) {
    const id_ = Number(message.id);
    return this.prisma.mESSAGES.update({
      where: {
        id: id_,
      },
      data: {
        message: message.message,
      },
    });
  }
}

export default MessageRepository;
