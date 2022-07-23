import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../../database/database.module';
import { AbilityModule } from '../ability/ability.module';
import { AddressModule } from '../address/address.module';
import { ContactModule } from '../contact/contact.module';
import { ContractModule } from '../contract/contract.module';

@Module({
  imports: [
    DatabaseModule,
    AbilityModule,
    AddressModule,
    ContactModule,
    ContractModule,
  ],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [...usersProviders, UsersService],
})
export class UsersModule {}
