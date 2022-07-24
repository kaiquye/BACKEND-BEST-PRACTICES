import { NextFunction, Request, Response } from 'express';
import NewCollaboratorDto from '../dto/new-collaborator.dto';
import { validate, validateOrReject } from 'class-validator';

class NewCollaboratorController {
  async execute(req: Request, res: Response, next?: NextFunction) {}
}

export default new NewCollaboratorController();
