import { container, injectable } from 'tsyringe';
import { Request, Reponse } from 'express';
import RandomMessageUseCase from '../../../domain/useCases/random-message';

class RandomMessageController {
  async execute(req: Request, res: Reponse): Promise<Reponse> {
    const useCase = container.resolve(RandomMessageUseCase);
    const { userId } = req.body;
    const response = await useCase.execute({ id: userId });

    return res.status(response.status).json(response);
  }
}
export default new RandomMessageController();
