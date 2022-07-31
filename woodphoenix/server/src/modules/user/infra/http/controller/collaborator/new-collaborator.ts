import { Request, Response } from 'express';
import NewCollaboratorDto from '../../../../domain/dto/new-collaborator.dto';
import CreateUserUseCase from '../../../../domain/useCases/newUser/new-admin';
import { container } from 'tsyringe';
import { Result } from '../../../../../../shared/Error/App.error';
import { Rules } from '../../../../utils/enums/rules';

class NewCollaboratorController {
  async execute(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateUserUseCase);
    const data: NewCollaboratorDto = {
      ...req.body,
      access_type: Rules.COLLABORATOR,
    };

    const response: Result<any> = await useCase.execute(data);

    return res.status(response.status).json(response);
  }
}

export default new NewCollaboratorController();
