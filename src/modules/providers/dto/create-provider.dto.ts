import { IsNotEmpty, IsString } from 'class-validator';
import { IProvidersInterface } from 'src/interfaces/IProvidersInterface';

export class CreateProviderDto implements IProvidersInterface {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  company: string;
}
