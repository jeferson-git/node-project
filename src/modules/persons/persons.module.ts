import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { AbilityModule } from '../ability/ability.module';
import { DatabaseModule } from 'src/database/database.module';
import { personsProviders } from './persons.providers';
import { AddressModule } from '../address/address.module';
import { ContactModule } from '../contact/contact.module';
import { ContractModule } from '../contract/contract.module';

@Module({
  imports: [
    AbilityModule,
    DatabaseModule,
    AddressModule,
    ContactModule,
    ContractModule,
  ],
  controllers: [PersonsController],
  providers: [...personsProviders, PersonsService],
})
export class PersonsModule {}
