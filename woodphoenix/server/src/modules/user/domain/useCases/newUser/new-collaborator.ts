import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../../infra/repository/adapters/AUserRepository';
import NewCollaboratorDto from '../../dto/new-collaborator.dto';
import { Result } from '../../../../../shared/Error/App.error';
import UseCase from '../useCase';

interface IResponse {}

@injectable()
class CreateCollaboratorUseCase
  implements UseCase<NewCollaboratorDto, IResponse>
{
  private alreadyExists = 'there is already a registered user';
  constructor(
    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}
  async execute(newCollaboratorDto: NewCollaboratorDto): Promise<Result<any>> {
    try {
      const alreadyExists = await this.userRepository.exists({
        cpf: newCollaboratorDto.cpf,
      });

      if (alreadyExists) {
        return Result<NewCollaboratorDto>.fail(this.alreadyExists, 400);
      }

      const data = await this.userRepository.create(newCollaboratorDto);
      return Result<NewCollaboratorDto>.ok(data, 201);
    } catch (error) {
      console.log(error);
      return Result<NewCollaboratorDto>.fail(
        'unable to create a new collaborator',
      );
    }
  }
}
export default CreateCollaboratorUseCase;
