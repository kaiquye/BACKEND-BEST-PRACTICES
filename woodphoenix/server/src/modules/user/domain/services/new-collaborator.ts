import NewCollaboratorDto from '../dto/new-collaborator.dto';
import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../infra/adapters/AUserRepository';

@injectable()
export default class NewCollaborator {
  constructor(
    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}

  async execute(newCollaboratorDto: NewCollaboratorDto) {
    await this.userRepository.create(newCollaboratorDto);
  }
}
