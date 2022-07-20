/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

import { IUserInterface } from '../../../../interfaces/IUserInterface';

import { CreateAddressDto } from '../../address/dto/create-address.dto';
import { CreateContactDto } from '../../contact/dto/create-contact.dto';
import { CreateContractDto } from '../../contract/dto/create-contract.dto';
export class CreateUserDto implements IUserInterface {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsOptional()
  @IsDateString()
  birthDate: string;

  @IsOptional()
  @IsString()
  rg: string;

  @IsOptional()
  @IsString()
  cpf: string;

  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  address: CreateAddressDto

  @ValidateNested({ each: true })
  @Type(() => CreateContactDto)
  contact: CreateContactDto

  @ValidateNested({ each: true })
  @Type(() => CreateContractDto)
  contract: CreateContractDto
}
