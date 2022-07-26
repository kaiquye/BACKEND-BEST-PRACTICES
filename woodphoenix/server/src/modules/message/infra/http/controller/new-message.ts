import { Result } from '../../../../../shared/Error/App.error';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import NewMessageUseCase from '../../../domain/useCases/new-message';

class NewMessageController {
  async execute(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(NewMessageUseCase);

    const response: Result<any> = await useCase.execute(req.body);

    return res.status(response.status).json(response);
  }
}

export default new NewMessageController();
