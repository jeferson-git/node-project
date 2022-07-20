import { ScheduleDto } from 'src/modules/users/schedule/dto/create-schedule.dto';
import { Schedule } from 'src/modules/users/schedule/entities/schedule.entity';

interface IScheduleInterface {
  userId: string;
  schedule: ScheduleDto[];
}

export { IScheduleInterface };
