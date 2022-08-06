import UseCase from './useCase';
import { Result } from '../../../../shared/Error/App.error';
import { inject, injectable } from 'tsyringe';
import AdapterMessageRepository from '../../infra/repository/adapters/RepositoryAdapter';
import AdapterUserRepository from '../../../user/infra/repository/adapters/AUserRepository';
import IMessage from '../entities/message';

interface IRequest {
  message: string;
  team: string;
  user_id?: string;
  id_message?: number;
}

@injectable()
class UpdateMessageUseCase implements UseCase<IRequest, Result<any>> {
  constructor(
    @inject('MessageRepository')
    private messageRepository: AdapterMessageRepository,

    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}
  async execute(request: IRequest): Promise<Result<any>> {
    try {
      console.log(request);
      const [leaderExists, messageExists] = await Promise.all([
        this.userRepository.exists({
          id: request.user_id,
        }),
        this.messageRepository.exists({
          id: request.id_message,
        }),
      ]);

      if (!leaderExists) {
        return Result<IMessage>.fail('leader not found', 404);
      }

      if (!messageExists) {
        return Result<IMessage>.fail('message not found', 404);
      }

      const message = await this.messageRepository.update({
        message: request.message,
        id: request.id_message,
      });

      return Result<IMessage>.ok(message, 201);
    } catch (error) {
      console.log(error);
      return Result<IMessage>.fail('error editing message', 500);
    }
  }
}

export default UpdateMessageUseCase;
