/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateUserDto {
  @ValidateNested({ each: true })
  @Type(() => User)
  user_data: User;

}
class User {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin:boolean
}

