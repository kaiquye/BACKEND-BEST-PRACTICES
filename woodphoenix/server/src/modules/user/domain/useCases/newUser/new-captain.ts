import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../../infra/repository/adapters/AUserRepository';
import NewCollaboratorDto from '../../dto/new-collaborator.dto';
import { Result } from '../../../../../shared/Error/App.error';
import UseCase from '../useCase';

interface IResponse {}

@injectable()
class CreateCaptainUseCase implements UseCase<NewCollaboratorDto, IResponse> {
  private alreadyExists = 'there is already a registered user';
  private alreadyLeader = 'there is already a team with a leader';
  constructor(
    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}
  async execute(newCollaboratorDto: NewCollaboratorDto): Promise<Result<any>> {
    try {
      const [alreadyExists, alreadyLeader] = await Promise.all([
        this.userRepository.exists({
          cpf: newCollaboratorDto.cpf,
        }),
        this.userRepository.exists({
          team: newCollaboratorDto.team,
        }),
      ]);

      if (alreadyExists) {
        return Result<NewCollaboratorDto>.fail(this.alreadyExists, 400);
      }

      if (alreadyLeader) {
        return Result<NewCollaboratorDto>.fail(this.alreadyLeader, 400);
      }

      const data = await this.userRepository.create(newCollaboratorDto);
      return Result<NewCollaboratorDto>.ok(data, 201);
    } catch {
      return Result<NewCollaboratorDto>.fail('unable to create a new admin');
    }
  }
}
export default CreateCaptainUseCase;
