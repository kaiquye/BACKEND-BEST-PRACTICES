import UseCase from './useCase';
import { Result } from '../../../../shared/Error/App.error';
import { inject, injectable } from 'tsyringe';
import { randomMessage } from '../../utils/apiRandomMessage/connection';
import IMessage from '../entities/message';
import AdapterRandowmMessageRepository from '../../infra/repository/adapters/repositoryRandomMessageAdapter';

interface IRequest {
  id: number;
}

@injectable()
class RandomMessageUseCase implements UseCase<IRequest, Result<any>> {
  private readonly maximumNumberDay = 4; // numero maximo de mensagem aleatorias por dia ( maxAbsentDays )
  private readonly maxAbsentDays = 1; // periodo de dias que ele pode gerar  4 ( maximumNumberDay ) mensagems

  constructor(
    @inject('RandomMessageRepository')
    private randomMessageRepository: AdapterRandowmMessageRepository,
  ) {}
  async execute(request: IRequest): Promise<Result<any>> {
    try {
      const user_id = request.id;
      const messageFromUser =
        await this.randomMessageRepository.searchLatestMessage(user_id);

      if (messageFromUser.length >= this.maximumNumberDay) {
        const oldDate = new Date(messageFromUser[0].createAt).getTime();
        const current_date = new Date().getTime();
        const diffInMs = current_date - oldDate;
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        // if (diffInDays < this.maxAbsentDays) {
        //   return Result<IMessage>.fail(
        //     'you can make only 4 random messages',
        //     400,
        //   );
        // }

        const randowMessage = await randomMessage();

        const [deleteHistoric, createMessage] = await Promise.all([
          await this.randomMessageRepository.delete({
            userId: user_id,
          }),
          await this.randomMessageRepository.create({
            message: randowMessage,
            userId: user_id,
          }),
        ]);

        return Result<IMessage>.ok({ randowMessage });
      }

      const randowMessage = await randomMessage();

      await this.randomMessageRepository.create({
        message: randowMessage,
        userId: user_id,
      });

      return Result<IMessage>.ok({ randowMessage });
    } catch (e) {
      return Result<IMessage>.fail('random messages unavailable');
    }
  }
}
export default RandomMessageUseCase;
