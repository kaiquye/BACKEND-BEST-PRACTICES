import UseCase from './useCase';
import { Result } from '../../../../shared/Error/App.error';
import { inject, injectable } from 'tsyringe';
import AdapterMessageRepository from '../../infra/repository/adapters/RepositoryAdapter';
import IMessage from '../entities/message';

interface IRequest {
  team: string;
}

@injectable()
class FindMessageUseCase implements UseCase<IRequest, Result<any>> {
  constructor(
    @inject('MessageRepository')
    private messageRepository: AdapterMessageRepository,
  ) {}
  async execute(request: IRequest): Promise<Result<any>> {
    try {
      const alreadyExists = await this.messageRepository.exists({
        team: request.team,
      });

      if (!alreadyExists) {
        return Result<IMessage>.fail('not found team', 404);
      }

      const message = await this.messageRepository.findByTeam(request.team);

      const body = {
        total_itens: message.length,
        item: message,
        team: request.team,
      };
      return Result<IMessage>.ok(body, 200);
    } catch (e) {
      return Result<IMessage>.fail('error');
    }
  }
}

export default FindMessageUseCase;
