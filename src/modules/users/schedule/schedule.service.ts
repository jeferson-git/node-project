import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { UsersService } from '../register/users.service';

@Injectable()
export class ScheduleService {
  constructor(
    @Inject('SCHEDULE_REPOSITORY')
    private readonly repository: Repository<Schedule>,
    private readonly userService: UsersService,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    const user = await this.userService.findOne(createScheduleDto.userId);

    if (!user) {
      throw new NotFoundException(
        `User ${createScheduleDto.userId}, not Found !!`,
      );
    }
    
    const schedule = this.repository.create(createScheduleDto);
    schedule.users = user;
    return this.repository.save(schedule);
  }

  findAll() {
    return `This action returns all schedule`;
  }

  findOne(id: string) {
    return `This action returns a #${id} schedule`;
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: string) {
    return `This action removes a #${id} schedule`;
  }
}
