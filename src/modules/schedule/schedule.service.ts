import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { UsersService } from '../users/users.service';

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

    const schedule = this.repository.create(createScheduleDto.schedule);

    schedule.forEach((element) => {
      element.user = user;
    });

    return this.repository.save(schedule);
  }

  findAll() {
    return this.repository.find({ relations: { user: true } });
  }

  findOne(id: string) {
    return this.repository.findOne({
      where: { id: id },
      relations: { user: true },
    });
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    const schedule = await this.repository.preload({
      id: id,
      ...updateScheduleDto,
    });

    if (!schedule) {
      throw new NotFoundException(`Schedule ${id}, not found`);
    }

    if (updateScheduleDto.userId) {
      const user = await this.userService.findOne(updateScheduleDto.userId);
      if (!user) {
        throw new NotFoundException(
          `User ${updateScheduleDto.userId}, not Found !!`,
        );
      }
      schedule.user = user;
    }

    return this.repository.save(schedule);
  }

  async remove(id: string) {
    return this.repository.delete(id);
  }
}
