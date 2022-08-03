import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Result } from '../../../../../../shared/Error/App.error';
import LoginCollaboratoreUseCase from '../../../../domain/useCases/loginUser/loginCollaborator';

class LoginCollaboratorController {
  async execute(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(LoginCollaboratoreUseCase);

    const response: Result<any> = await useCase.execute({ cpf: req.body.cpf });

    return res.status(response.status).json(response);
  }
}

export default new LoginCollaboratorController();
