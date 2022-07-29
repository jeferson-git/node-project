import { Injectable, NotFoundException, Inject } from '@nestjs/common';

import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repository: Repository<User>,
  ) {}

  async create(userDto: CreateUserDto) {
    const user = this.repository.create(userDto);
    return this.repository.save(user);
  }

  findAll() {
    // return this.repository.find({
    //   relations: { address: true, contact: true, contract: true },
    // });
  }

  findOne(id: string): Promise<User> {
    return this.repository.findOneBy({ id: id });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.repository.findOne({
      select: ['email', 'password'],
      where: { email: email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.repository.preload({
      id: id,
      ...updateUserDto,
    });

    if (!user) {
      throw new NotFoundException(`User ${id}, not found`);
    }
    return this.repository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return this.repository.delete(user.id);
  }
}
