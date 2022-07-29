import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddressService } from '../address/address.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private readonly repository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const person = this.repository.create(createPersonDto);
    return this.repository.save(person);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne({
      where: { id: id },
      relations: { address: true, contact: true, contract: true },
    });
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const person = await this.repository.preload({
      id,
      ...updatePersonDto,
    });

    if (!person) {
      throw new NotFoundException(`Person id ${id}, not Found`);
    }

    return this.repository.save(person);
  }

  async remove(id: string) {
    const person = await this.repository.findOne({ where: { id: id } });

    if (!person) {
      throw new NotFoundException(`Person id ${id}, not Found`);
    }

    return this.repository.delete(person);
  }
}
