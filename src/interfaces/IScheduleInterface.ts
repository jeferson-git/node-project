import { ScheduleDto } from 'src/modules/schedule/dto/create-schedule.dto';
import { Schedule } from 'src/modules/schedule/entities/schedule.entity';

interface IScheduleInterface {
  userId: string;
  schedule: ScheduleDto[];
}

export { IScheduleInterface };
