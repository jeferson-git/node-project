import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IAddressinterface } from 'src/interfaces/IAddressInterface';
import { User } from '../../users/entities/user.entity';

export class CreateAddressDto implements IAddressinterface {
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

  // @IsNotEmpty()
  // @IsString()
  // personId: string;
}
