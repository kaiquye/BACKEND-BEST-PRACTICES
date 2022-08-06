import AbstractRepository from '../../../../../database/repository/abstract.repository';
import IMessage from '../../../domain/entities/message';

export default abstract class AdapterMessageRepository extends AbstractRepository<IMessage> {
  abstract findByTeam(team: string): Promise<IMessage[]>;

  abstract update(message: Partial<IMessage>);
}
