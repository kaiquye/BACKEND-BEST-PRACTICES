import { container } from 'tsyringe';
import UserRepository from '../../modules/user/infra/repository/user.repository';
import AdapterUserRepository from '../../modules/user/infra/repository/adapters/AUserRepository';
import MessageRepository from '../../modules/message/infra/repository/repository';
import AdapterMessageRepository from '../../modules/message/infra/repository/adapters/RepositoryAdapter';

container.registerSingleton<AdapterMessageRepository>(
  'MessageRepository',
  MessageRepository,
);

container.registerSingleton<AdapterUserRepository>(
  'UserRepository',
  UserRepository,
);
