/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

import { IUserInterface } from '../../../interfaces/IUserInterface';

export class CreateUserDto implements IUserInterface {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @Matches('password')
  confirmPassword: string;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean;

  @IsNotEmpty()
  @IsString()
  personId: string;
}
