export default interface IMessage {
  id?: number;
  message: string;
  team: string;
  userId?: number;
  createAt?: Date;
}
