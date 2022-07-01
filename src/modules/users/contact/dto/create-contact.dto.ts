import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IContactInterface } from 'src/interfaces/users/register/IContactInterface';
import { User } from '../../register/entities/user.entity';

export class CreateContactDto implements IContactInterface {
  @IsNotEmpty()
  @IsString()
  cel: string;

  @IsOptional()
  @IsString()
  alternativeContact?: string;

  user: User;
}
