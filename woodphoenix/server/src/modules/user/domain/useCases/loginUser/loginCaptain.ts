import UseCase from '../useCase';
import { inject, injectable } from 'tsyringe';
import AdapterUserRepository from '../../../infra/repository/adapters/AUserRepository';
import { Result } from '../../../../../shared/Error/App.error';
import { Rules } from '../../../utils/enums/rules';
import AuthCaptain from '../../../../../shared/middleware/auth /auth.captain';

interface IRequest {
  cpf: string;
}
interface IResponse {}

@injectable()
class LoginCaptainUseCase implements UseCase<IRequest, IResponse> {
  constructor(
    @inject('UserRepository')
    private userRepository: AdapterUserRepository,
  ) {}

  async execute(request: IRequest): Promise<Result<any>> {
    try {
      const payload = await this.userRepository.findOne({
        cpf: request.cpf,
      });

      console.log(payload);

      if (!payload) {
        return Result<any>.fail('cpf and invalid', 401);
      }

      if (payload.access_type !== Rules.CAPTAIN) {
        return Result<any>.fail('access denied', 401);
      }

      delete payload.cpf;
      const token = AuthCaptain.sing(payload);

      return Result<IResponse>.ok({ token }, 200);
    } catch {
      return Result<IResponse>.fail('could not authenticate', 500);
    }
  }
}

export default LoginCaptainUseCase;
