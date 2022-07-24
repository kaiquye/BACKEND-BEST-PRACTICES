import { Request, Response } from 'express';
import NewCollaborator from '../../domain/services/new-collaborator';
import NewCollaboratorDto from '../../domain/dto/new-collaborator.dto';
import Connection from '../../../../database/repository/abstract.repository';
import { container } from 'tsyringe';

class NewCollaboratorController {
  async execute(req: Request, res: Response): Promise<Response> {
    const data: NewCollaboratorDto = { ...req.body };

    const services = container.resolve(NewCollaborator);

    const response = await services.execute(data);

    res.send(response);
  }
}

export default new NewCollaboratorController();
