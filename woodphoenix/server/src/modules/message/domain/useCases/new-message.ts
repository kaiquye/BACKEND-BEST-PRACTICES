import UseCase from './useCase';
import IMessage from '../entities/message';
import { inject, injectable } from 'tsyringe';
import AdapterMessageRepository from '../../infra/repository/adapters/RepositoryAdapter';
import { Result } from '../../../../shared/Error/App.error';

@injectable()
class NewMessageUseCase implements UseCase<IMessage, Result<any>> {
  private errorMessage = 'error, could not create new message';
  constructor(
    @inject('MessageRepository')
    private messageRepository: AdapterMessageRepository,
  ) {}
  async execute(request: IMessage): Promise<Result<any>> {
    try {
      const alreadyExists = await this.messageRepository.findOne({
        message: request.message,
      });

      if (alreadyExists) {
        return Result<IMessage>.fail('duplicate messages', 409);
      }

      const message = await this.messageRepository.create({
        message: request.message,
        team: request.team,
        userId: request.userId,
      });

      return Result<IMessage>.ok(message, 201);
    } catch (error) {
      console.log(error);
      return Result<IMessage>.fail(this.errorMessage, 500);
    }
  }
}

export default NewMessageUseCase;
