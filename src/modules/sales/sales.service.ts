import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CurrencyTypesService } from '../currency-types/currency-types.service';

import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

import { Sale } from './entities/sale.entity';
@Injectable()
export class SalesService {
  constructor(
    @Inject('SALE_REPOSITORY')
    private readonly repository: Repository<Sale>,
    private readonly currencyTypeService: CurrencyTypesService,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    const currencyType = await this.currencyTypeService.findOne(
      createSaleDto.currencyTypeId,
    );

    if (!currencyType) {
      throw new NotFoundException(
        `Currency Type ${createSaleDto.currencyTypeId}, not Found !`,
      );
    }

    const sale = this.repository.create(createSaleDto);
    sale.currencyType = currencyType;
    return this.repository.save(sale);
  }

  findAll(): Promise<Sale[]> {
    return this.repository.find({ relations: { currencyType: true } });
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    const sale = await this.repository.preload({
      id,
      ...updateSaleDto,
    });

    if (!sale) {
      throw new NotFoundException(`Sale ${id}, not Found !`);
    }

    if (updateSaleDto.currencyTypeId) {
      const currencyType = await this.currencyTypeService.findOne(
        updateSaleDto.currencyTypeId,
      );

      if (!currencyType) {
        throw new NotFoundException(
          `Currency Type ${updateSaleDto.currencyTypeId}, not Found !`,
        );
      }

      sale.currencyType = currencyType;
    }

    return this.repository.save(sale);
  }

  async remove(id: string) {
    return this.repository.delete(id);
  }
}
