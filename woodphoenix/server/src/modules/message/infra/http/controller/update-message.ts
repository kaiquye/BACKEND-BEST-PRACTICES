import { Result } from '../../../../../shared/Error/App.error';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateMessageUseCase from '../../../domain/useCases/update-message';

class UpdateMessageController {
  async execute(req: Request, res: Response): Promise<Response> {
    console.log(req.params);
    const useCase = container.resolve(UpdateMessageUseCase);

    const response: Result<any> = await useCase.execute({
      team: req.body.team,
      message: req.body.message,
      id_message: Number(req.params.id_message),
    });

    return res.status(response.status).json(response);
  }
}

export default new UpdateMessageController();
