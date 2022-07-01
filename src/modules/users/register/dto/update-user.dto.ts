import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { CreateAddressDto } from '../../address/dto/create-address.dto';
import { UpdateAddressDto } from '../../address/dto/update-address.dto';
import { CreateContactDto } from '../../contact/dto/create-contact.dto';
import { UpdateContactDto } from '../../contact/dto/update-contact.dto';
import { CreateContractDto } from '../../contract/dto/create-contract.dto';
import { UpdateContractDto } from '../../contract/dto/update-contract.dto';
import { CreateUserDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ValidateNested({ each: true })
  @Type(() => UpdateAddressDto)
  address: CreateAddressDto;

  @ValidateNested({ each: true })
  @Type(() => UpdateContactDto)
  contact: CreateContactDto;

  @ValidateNested({ each: true })
  @Type(() => UpdateContractDto)
  contract: CreateContractDto;
}
