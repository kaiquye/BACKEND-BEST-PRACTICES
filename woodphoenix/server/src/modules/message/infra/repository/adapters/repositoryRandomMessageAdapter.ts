import AbstractRepository from '../../../../../database/repository/abstract.repository';
import IRandomMessage from '../../../domain/entities/randomMessage';

export default abstract class AdapterRandowmMessageRepository extends AbstractRepository<IRandomMessage> {
  abstract searchLatestMessage(id: number): Promise<IRandomMessage[]>;
}
