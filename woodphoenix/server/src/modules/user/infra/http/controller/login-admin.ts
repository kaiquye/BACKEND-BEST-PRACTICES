import { Request, Response } from 'express';
import NewCollaboratorDto from '../../../domain/dto/new-collaborator.dto';
import CreateUserUseCase from '../../useCases/newUser/newUser';
import { container } from 'tsyringe';
import { Result } from '../../../../../Shared/Error/App.error';
import { Rules } from '../../../domain/enum/rules';
import LoginUserUseCase from '../../useCases/loginUser/loginAdmin';
import LoginAdminUseCase from '../../useCases/loginUser/loginAdmin';

class LoginAdminController {
  async execute(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(LoginAdminUseCase);

    const response: Result<any> = await useCase.execute({ cpf: req.body.cpf });

    return res.status(response.status).json(response);
  }
}

export default new LoginAdminController();
