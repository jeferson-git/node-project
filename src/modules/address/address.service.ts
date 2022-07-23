import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';

import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private readonly repository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    const address = this.repository.create(createAddressDto);
    return this.repository.save(address);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    // const addressId = await this.repository.findOneOrFail({
    //   where: { user: { id: id } },
    // });
    // const address = await this.repository.preload({
    //   id: addressId.id,
    //   ...updateAddressDto,
    // });
    // if (!address) {
    //   throw new NotFoundException(`Address ${addressId.id}, not found`);
    // }
    // return this.repository.save(address);
  }

  async remove(id: string) {
    const address = await this.findOne(id);
    return this.repository.delete(address.id);
  }
}
