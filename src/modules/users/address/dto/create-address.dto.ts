import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IAddressinterface } from 'src/interfaces/IAddressInterface';
import { User } from '../../register/entities/user.entity';

export class CreateAddressDto implements IAddressinterface {
  userId: string;
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

  user: User;
}
