import { Type } from 'class-transformer';
import {
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IScheduleInterface } from 'src/interfaces/users/schedule/IScheduleInterface';
import { Schedule } from '../entities/schedule.entity';

export class ScheduleDto {
  @IsMilitaryTime()
  @IsNotEmpty()
  init_hour: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  final_hour: string;

  @IsDateString()
  @IsNotEmpty()
  date_work: string;
}
export class CreateScheduleDto implements IScheduleInterface {
  userId: string;
  schedule: Schedule[];
}
