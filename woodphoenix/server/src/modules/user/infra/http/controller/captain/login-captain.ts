import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Result } from '../../../../../../Shared/Error/App.error';
import LoginCollaborator from '../../../../domain/useCases/loginUser/loginCollaborator';

class LoginCollaboratorController {
  async execute(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(LoginCollaborator);

    const response: Result<any> = await useCase.execute({ cpf: req.body.cpf });

    return res.status(response.status).json(response);
  }
}

export default new LoginCollaboratorController();
