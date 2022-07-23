import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AddressService } from '../address/address.service';
import { ContactService } from '../contact/contact.service';
import { ContractService } from '../contract/contract.service';
import { IResponseInterface } from 'src/interfaces/IResponseInterface';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { Address } from '../address/entities/address.entity';

@Controller('persons')
export class PersonsController {
  constructor(
    private readonly personsService: PersonsService,
    private readonly addressService: AddressService,
    private readonly contactService: ContactService,
    private readonly contractService: ContractService,
  ) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    const person = await this.personsService.create(createPersonDto);
    // const address = new Address();
    // address.person = person;

    // await this.addressService.create(address);

    // if (createPersonDto.address) {
    //   const address = new CreateAddressDto();
    //   address.cep = createPersonDto.address.cep;
    //   address.district = createPersonDto.address.district;
    //   address.number = createPersonDto.address.number;
    //   address.street = createPersonDto.address.street;
    //   address.personId = person.id;

    //   await this.addressService.create(address);
    // }

    // console.log(person)
    // return person
    //   "address": {
    //     "street": "Senador Rodrigo Lobo",
    //     "cep": "89224075",
    //     "district": "Aventureiro",
    //     "number": "231"
    //   },
    //   "contact": {
    //     "cel": "47984108308",
    //     "alternativeContatct": "jefersonpereira0409@gmail.com"
    //   },
    //   "contract": {
    //     "contractDate": "2020-10-08",
    //     "officeHour": "matutino",
    //     "jobFunction": "padeiro",
    //     "payment": "2435.00"
    //   }
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personsService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personsService.remove(+id);
  }
}
