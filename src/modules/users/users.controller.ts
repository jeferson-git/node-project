/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  NotFoundException,
  BadRequestException,
  RequestMethod,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as bcrypt from 'bcrypt';
import { Address } from '../address/entities/address.entity';
import { AddressService } from '../address/address.service';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { CreateContactDto } from '../contact/dto/create-contact.dto';
import { ContactService } from '../contact/contact.service';
import { ContractService } from '../contract/contract.service';
import { CreateContractDto } from '../contract/dto/create-contract.dto';
import { UpdateAddressDto } from '../address/dto/update-address.dto';
import { User } from './entities/user.entity';
import { json } from 'stream/consumers';

@Controller('users')
export class UsersController {

  private response = {
    message: null,
    data: null,
  }

  constructor(
    private readonly usersService: UsersService,
    private readonly addressServcie: AddressService,
    private readonly contactService: ContactService,
    private readonly contractService: ContractService,
  ) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {

    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
    const user = await this.usersService.create(createUserDto);

    // if (!user) {
    //   throw new BadRequestException(`User not created`, 'Already Exists data: CPF, RG, EMAIL or SURNAME!');
    // }

    // const createAddressDto = new CreateAddressDto();
    // createAddressDto.cep = createUserDto.address.cep;
    // createAddressDto.district = createUserDto.address.district;
    // createAddressDto.number = createUserDto.address.number;
    // createAddressDto.street = createUserDto.address.street;
    // createAddressDto.user = user;

    // const address = await this.addressServcie.create(createAddressDto);

    // if (!address) {
    //   await this.usersService.remove(user.id);
    //   throw new BadRequestException(`Address not created!, User ${user.id} removed`);
    // }

    // const createContactDto = new CreateContactDto();
    // createContactDto.cel = createUserDto.contact.cel;
    // createContactDto.user = user;
    // if (createUserDto.contact.alternativeContact) createContactDto.alternativeContact = createUserDto.contact.alternativeContact;

    // const contact = await this.contactService.create(createContactDto);

    // if (!contact) {
    //   await this.addressServcie.remove(address.id);
    //   await this.usersService.remove(user.id);
    //   throw new BadRequestException(`Contact not created!, User ${user.id} removed`);
    // }

    // const createContractDto = new CreateContractDto();
    // createContractDto.contractDate = createUserDto.contract.contractDate;
    // createContractDto.jobFunction = createUserDto.contract.jobFunction;
    // createContractDto.officeHour = createUserDto.contract.officeHour;
    // createContractDto.payment = createUserDto.contract.payment;
    // createContractDto.user = user;

    // const contract = await this.contractService.create(createContractDto);

    // if (!contract) {
    //   await this.contactService.remove(contact.id);
    //   await this.addressServcie.remove(address.id);
    //   await this.usersService.remove(user.id);
    //   throw new BadRequestException(`Contract not created!, User ${user.id} removed`);
    // }

    // return this.setResponse(user, RequestMethod.POST);

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // if (updateUserDto.hasOwnProperty('password')) {
    //   const salt = await bcrypt.genSalt();
    //   updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    // }

    // if (updateUserDto.hasOwnProperty('address')) {
    //   this.addressServcie.update(id, updateUserDto.address)
    // }

    // if (updateUserDto.hasOwnProperty('contact')) {
    //   this.contactService.update(id, updateUserDto.contact)
    // }

    // if (updateUserDto.hasOwnProperty('contract')) {
    //   this.contractService.update(id, updateUserDto.contract)
    // }

    // const data = await this.usersService.update(id, updateUserDto);

    // return this.setResponse(data, RequestMethod.PUT)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  private setResponse(data: User, method?: number) {
    const typeMessage = method == 2 ? 'updated' : 'created';

    this.response.message = `User(s) ${typeMessage} successful !!! `
    this.response.data = data;

    return this.response;
  }
}
