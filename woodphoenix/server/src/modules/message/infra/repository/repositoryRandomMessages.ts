import { PrismaClient } from '@prisma/client';
import AdapterRandowmMessageRepository from './adapters/repositoryRandomMessageAdapter';
import IRandomMessage from '../../domain/entities/randomMessage';

class RandomMessageRepository extends AdapterRandowmMessageRepository {
  constructor() {
    super('RANDOM_MESSAGES', new PrismaClient());
  }

  searchLatestMessage(id: number): Promise<IRandomMessage[] | any> {
    return this.prisma.rANDOM_MESSAGES.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        createAt: 'desc',
      },
    });
  }
}

export default RandomMessageRepository;
