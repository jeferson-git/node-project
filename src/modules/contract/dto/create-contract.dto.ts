import {
  IsCurrency,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { IContractInterface } from 'src/interfaces/IContractInterface';
import { User } from '../../users/entities/user.entity';

export class CreateContractDto implements IContractInterface {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsDateString()
  contractDate: string;

  @IsOptional()
  @IsString()
  officeHour: string;

  @IsOptional()
  @IsString()
  jobFunction: string;

  @IsOptional()
  @IsCurrency({ type: 'BRL' })
  payment: string;
}
