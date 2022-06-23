import { IsDateString, IsMilitaryTime, IsNotEmpty } from 'class-validator';

export class CreateScheduleDto {
  @IsMilitaryTime()
  @IsNotEmpty()
  init_hour: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  final_hour: string;

  @IsDateString()
  @IsNotEmpty()
  date_work: string;

  @IsNotEmpty({ message: 'userId do Usuário não deve ser Vazio' })
  userId: string;
}
