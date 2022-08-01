export default interface IMessage {
  id?: string;
  message: string;
  team: string;
  userId?: number;
  createAt?: Date;
}
