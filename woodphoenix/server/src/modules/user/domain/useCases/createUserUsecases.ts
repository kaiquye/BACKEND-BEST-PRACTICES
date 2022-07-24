import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../infra/adapters/AUserRepository';
import NewCollaboratorDto from '../dto/new-collaborator.dto';
import AppError from '../../../../Shared/Error/App.error';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}
  async execute(newCollaboratorDto: NewCollaboratorDto) {
    const data = await this.userRepository.create(newCollaboratorDto);
    return data;
  }
}
export default CreateUserUseCase;
