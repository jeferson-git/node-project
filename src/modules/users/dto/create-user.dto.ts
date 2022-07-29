/* eslint-disable prettier/prettier */
import { Equals, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

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

  // @IsNotEmpty()
  // @IsString()
  // // @Matches('password')
  // confirmPassword: string;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean;

  @IsOptional()
  @IsString()
  personId: string;

}
