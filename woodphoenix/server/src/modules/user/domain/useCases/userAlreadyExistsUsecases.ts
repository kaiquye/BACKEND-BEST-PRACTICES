import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../infra/adapters/AUserRepository';
import NewCollaboratorDto from '../dto/new-collaborator.dto';
import NewCollaboratorServices from '../services/newUser';
import AppError from '../../../../Shared/Error/App.error';

@injectable()
class CreateUserUseCase {
  private alreadyExists = 'there is already a registered user with this cpf';
  constructor(
    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}

  async execute(newCollaboratorDto: NewCollaboratorDto): Promise<any> {
    const data = await this.userRepository.exists(newCollaboratorDto);
    if (data) {
      throw new AppError(this.alreadyExists, 409);
    }
  }
}

export default CreateUserUseCase;
