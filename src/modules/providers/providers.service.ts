import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';

import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

import { Provider } from './entities/provider.entity';

@Injectable()
export class ProvidersService {
  constructor(
    @Inject('PROVIDER_REPOSITORY')
    private repository: Repository<Provider>,
  ) {}

  create(createProviderDto: CreateProviderDto) {
    const provider = this.repository.create(createProviderDto);
    return this.repository.save(provider);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateProviderDto: UpdateProviderDto) {
    const provider = await this.repository.preload({
      id: id,
      ...updateProviderDto,
    });

    if (!provider) {
      throw new NotFoundException(`Provider ${id}, not found`);
    }

    return this.repository.save(provider);
  }

  async remove(id: string) {
    const provider = await this.repository.findOne({ where: { id: id } });

    if (!provider) {
      throw new NotFoundException(`Provider ${id}, not found`);
    }

    return this.repository.delete(provider);
  }
}
