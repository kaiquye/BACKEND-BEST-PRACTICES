import UseCase from '../useCase';
import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../../infra/adapters/AUserRepository';
import { Result } from '../../../../../Shared/Error/App.error';
import { Rules } from '../../../utils/enums/rules';
import AuthCollaboratore from '../../../infra/http/middleware/auth /auth.admin';

interface IRequest {
  cpf: string;
}
interface IResponse {}

@injectable()
class LoginCollaboratoreUseCase implements UseCase<IRequest, IResponse> {
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

      if (payload.access_type !== Rules.COLLABORATOR) {
        return Result<any>.fail('access denied', 401);
      }

      delete payload.cpf;
      const token = AuthCollaboratore.sing(payload);

      return Result<IResponse>.ok({ token }, 200);
    } catch {
      return Result<IResponse>.fail('could not authenticate', 500);
    }
  }
}

export default LoginCollaboratoreUseCase;
