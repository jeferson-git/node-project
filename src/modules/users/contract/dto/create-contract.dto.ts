import {
  IsCurrency,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { IContractInterface } from 'src/interfaces/IContractInterface';
import { User } from '../../register/entities/user.entity';

export class CreateContractDto implements IContractInterface {
  @IsNotEmpty()
  @IsDateString()
  contractDate: string;

  @IsNotEmpty()
  @IsString()
  officeHour: string;

  @IsNotEmpty()
  @IsString()
  jobFunction: string;

  @IsNotEmpty()
  @IsCurrency({ type: 'BRL' })
  payment: string;

  user: User;
}
