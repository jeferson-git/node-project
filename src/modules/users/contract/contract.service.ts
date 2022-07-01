import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';

@Injectable()
export class ContractService {
  constructor(
    @Inject('CONTRACT_REPOSITORY')
    private readonly repository: Repository<Contract>,
  ) {}

  async create(createContractDto: CreateContractDto) {
    const contract = this.repository.create(createContractDto);
    return this.repository.save(contract);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: string, updateContractDto: UpdateContractDto) {
    const contractId = await this.repository.findOne({
      where: { user: { id: id } },
    });

    const contract = await this.repository.preload({
      id: contractId.id,
      ...updateContractDto,
    });

    if (!contract) {
      throw new NotFoundException(`Contact ${contractId.id}, not found`);
    }

    return this.repository.save(contract);
  }

  async remove(id: string) {
    const contract = await this.findOne(id);
    return this.repository.remove(contract);
  }
}
