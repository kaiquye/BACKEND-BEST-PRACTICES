export default interface UseCase<IRequest, IResponse> {
  execute(request: IRequest): Promise<IResponse> | IResponse;
}
