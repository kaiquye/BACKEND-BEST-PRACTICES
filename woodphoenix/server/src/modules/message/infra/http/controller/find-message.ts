import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindMessageUseCase from '../../../domain/useCases/find-message';

class FindMessageController {
  async execute(req: Request, res: Request): Promise<Response> {
    const useCase = container.resolve(FindMessageUseCase);

    console.log(req.body);
    const response = await useCase.execute({ team: req.body.team });

    return res.status(response.status).json(response);
  }
}

export default new FindMessageController();
