import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  BadRequestException,
  RequestMethod,
  NotFoundException,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { Schedule } from './entities/schedule.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  private response = {
    data: null,
    message: null,
  };

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    const schedule = await this.scheduleService.create(createScheduleDto);

    if (!schedule) {
      throw new BadRequestException(`Schedule(s) not created !!`);
    }

    return this.setResponse(schedule, RequestMethod.POST);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const schedules = await this.scheduleService.findAll();

    if (!schedules) {
      throw new NotFoundException(`Schedules Not Found !`);
    }

    return schedules;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const schedule = await this.scheduleService.findOne(id);

    if (!schedule) {
      throw new NotFoundException(`Schedule ${id} Not Found !`);
    }

    return schedule;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    const schedule = await this.scheduleService.update(id, updateScheduleDto);

    if (!schedule) {
      throw new NotFoundException(`Schedule(s) Not Updated !`);
    }

    return this.setResponse(schedule, RequestMethod.PUT);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(id);
  }

  private setResponse(data: Schedule[] | Schedule, method?: number) {
    const typeMessage = method == 2 ? 'updated' : 'created';

    this.response.message = `Schedule(s) ${typeMessage} successful !!! `;
    this.response.data = data;

    return this.response;
  }
}
