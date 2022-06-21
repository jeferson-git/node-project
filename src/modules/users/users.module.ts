import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../../database/database.module';
import { AbilityModule } from '../ability/ability.module';

@Module({
  imports: [DatabaseModule, AbilityModule],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [...usersProviders, UsersService],
})
export class UsersModule {}
