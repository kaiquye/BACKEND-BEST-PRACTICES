import { Result } from '../../../../../shared/Error/App.error';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateMessageUseCase from '../../../domain/useCases/update-message';

class UpdateMessageController {
  async execute(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(UpdateMessageUseCase);

    const response: Result<any> = await useCase.execute(req.body);

    return res.status(response.status).json(response);
  }
}

export default new UpdateMessageController();
