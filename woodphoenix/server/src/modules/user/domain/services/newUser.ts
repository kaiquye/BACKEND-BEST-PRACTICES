import NewCollaboratorDto from '../dto/new-collaborator.dto';
import { container } from 'tsyringe';
import CreateUserUseCase from '../useCases/createUserUsecases';
import userAlreadyExists from '../useCases/userAlreadyExistsUsecases';
import AppError from '../../../../Shared/Error/App.error';

class NewCollaboratorServices {
  private internalError = 'internal error in our service';

  async execute(newCollaboratorDto: NewCollaboratorDto) {
    try {
      const createUser = container.resolve(CreateUserUseCase);
      const alreadyExists = container.resolve(userAlreadyExists);

      await alreadyExists.execute(newCollaboratorDto);
      await createUser.execute(newCollaboratorDto);
    } catch (error) {
      if (error instanceof AppError) {
        return error;
      }
      return new AppError(this.internalError, 500);
    }
  }
}

export default new NewCollaboratorServices();
