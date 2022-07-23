import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { AbilityModule } from 'src/modules/ability/ability.module';
import { DatabaseModule } from 'src/database/database.module';
import { scheduleProviders } from './schedule.providers';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [DatabaseModule, AbilityModule, UsersModule],
  controllers: [ScheduleController],
  exports: [ScheduleService],
  providers: [...scheduleProviders, ScheduleService],
})
export class ScheduleModule {}
