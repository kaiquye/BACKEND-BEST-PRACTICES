import AbstractRepository from '../../../../../database/repository/abstract.repository';
import IUser from '../../../domain/entities/user.interface';

export default abstract class AdapterUserRepository extends AbstractRepository<IUser> {}
