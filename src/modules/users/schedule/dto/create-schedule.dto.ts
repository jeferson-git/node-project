import { IsDateString, IsMilitaryTime, IsNotEmpty } from 'class-validator';

export class CreateScheduleDto {
  @IsMilitaryTime()
  @IsNotEmpty()
  init_hour: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  final_hour: string;

  @IsDateString('YYYY-MM-DD')
  @IsNotEmpty()
  date_work: string;

  @IsNotEmpty()
  userId: string;
}
