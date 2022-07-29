import { Request, Response } from 'express';
import NewCollaboratorDto from '../../../domain/dto/new-collaborator.dto';
import CreateUserUseCase from '../../../useCases/newUser/newAdmin';
import { container } from 'tsyringe';
import { Result } from '../../../../../Shared/Error/App.error';
import { Rules } from '../../../domain/enum/rules';

class NewCollaborator {
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

export default new NewCollaborator();
