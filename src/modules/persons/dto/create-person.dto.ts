import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IAddressinterface } from 'src/interfaces/IAddressInterface';
import { IContactInterface } from 'src/interfaces/IContactInterface';
import { IContractInterface } from 'src/interfaces/IContractInterface';
import { IPersonInterface } from 'src/interfaces/IPersonInterface';
import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';
import { CreateContactDto } from 'src/modules/contact/dto/create-contact.dto';
import { CreateContractDto } from 'src/modules/contract/dto/create-contract.dto';

export class CreatePersonDto implements IPersonInterface {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(9)
  rg: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  cpf: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  address: IAddressinterface;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateContactDto)
  contact: IContactInterface;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateContractDto)
  contract: IContractInterface;
}
