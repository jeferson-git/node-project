import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';
import { UpdateAddressDto } from '../../address/dto/update-address.dto';
import { UpdateContactDto } from '../../contact/dto/update-contact.dto';
import { UpdateContractDto } from '../../contract/dto/update-contract.dto';
import { IContractInterface } from 'src/interfaces/IContractInterface';
import { IContactInterface } from 'src/interfaces/IContactInterface';
import { IAddressinterface } from 'src/interfaces/IAddressInterface';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateAddressDto)
  address: IAddressinterface;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateContactDto)
  contact: IContactInterface;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateContractDto)
  contract: IContractInterface;
}
