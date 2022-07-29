import { Request, Response } from 'express';
import NewCollaboratorDto from '../../../domain/dto/new-collaborator.dto';
import NewCollaboratorServices from '../../../domain/services/newCollaborator';

class NewCaptain {
  async execute(req: Request, res: Response): Promise<Response> {
    const data: NewCollaboratorDto = {
      ...req.body,
      access_type: 'captain',
    };

    const response = await NewCollaboratorServices.execute(data);

    return res.send(response);
  }
}

export default new NewCaptain();
