import UseCase from '../useCase';
import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../../infra/repository/adapters/AUserRepository';
import { Result } from '../../../../../shared/Error/App.error';
import { Rules } from '../../../utils/enums/rules';
import AuthCollaborator from '../../../../../shared/middleware/auth /validators/auth.collaborator';

interface IRequest {
  cpf: string;
}
interface IResponse {}

@injectable()
class LoginAdminUseCase implements UseCase<IRequest, IResponse> {
  constructor(
    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}

  async execute(request: IRequest): Promise<Result<any>> {
    try {
      const payload = await this.userRepository.findOne({
        cpf: request.cpf,
      });

      if (!payload) {
        return Result<any>.fail('cpf and invalid', 401);
      }

      if (payload.access_type !== Rules.ADMIN) {
        return Result<any>.fail('access denied', 401);
      }

      delete payload.cpf;
      const token = AuthCollaborator.sing(payload);

      return Result<IResponse>.ok({ token }, 200);
    } catch {
      return Result<IResponse>.fail('could not authenticate', 500);
    }
  }
}

export default LoginAdminUseCase;
