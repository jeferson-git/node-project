import { IsNotEmpty, IsString } from 'class-validator';
import { IAddressinterface } from 'src/interfaces/IAddressInterface';

export class CreateAddressDto implements IAddressinterface {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  district: string;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  personId: string;
}
