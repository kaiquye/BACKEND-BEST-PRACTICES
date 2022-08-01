import AbstractRepository from '../../../../../database/repository/abstract.repository';
import IMessage from '../../../domain/entities/message';

export default abstract class AdapterMessageRepository extends AbstractRepository<IMessage> {}
