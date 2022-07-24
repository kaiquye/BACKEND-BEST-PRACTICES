import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export default class NewCollaboratorDto {
  @IsString()
  @IsNotEmpty()
  id?: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsNumber()
  @IsNotEmpty()
  access_type: string;

  @IsString()
  team: string;
}
