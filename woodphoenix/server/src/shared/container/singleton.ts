import { container } from 'tsyringe';
import UserRepository from '../../modules/user/infra/repository/user.repository';
import AdapterUserRepository from '../../modules/user/infra/adapters/AUserRepository';

container.registerSingleton<AdapterUserRepository>(
  'UserRepository',
  UserRepository,
);
