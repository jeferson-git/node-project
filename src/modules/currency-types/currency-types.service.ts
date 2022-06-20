import { Injectable, NotFoundException, Inject } from '@nestjs/common';

import { Repository } from 'typeorm';

import { CreateCurrencyTypeDto } from './dto/create-currency-type.dto';
import { UpdateCurrencyTypeDto } from './dto/update-currency-type.dto';

import { CurrencyType } from './entities/currency-type.entity';

@Injectable()
export class CurrencyTypesService {
  constructor(
    @Inject('CURRENCY_REPOSITORY')
    private readonly repository: Repository<CurrencyType>,
  ) {}

  create(createCurrencyTypeDto: CreateCurrencyTypeDto) {
    const currency = this.repository.create(createCurrencyTypeDto);
    return this.repository.save(currency);
  }

  findAll(): Promise<CurrencyType[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<CurrencyType> {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: string, updateCurrencyTypeDto: UpdateCurrencyTypeDto) {
    const currency = await this.repository.preload({
      id: id,
      ...updateCurrencyTypeDto,
    });

    if (!currency) {
      throw new NotFoundException(`Currencty ${id}, not found`);
    }
    return this.repository.save(currency);
  }

  async remove(id: string) {
    const currency = await this.findOne(id);
    return this.repository.delete(currency);
  }
}
