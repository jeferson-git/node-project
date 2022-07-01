import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { addressProviders } from './address.provider';
import { AbilityModule } from 'src/modules/ability/ability.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule, AbilityModule],
  controllers: [AddressController],
  providers: [...addressProviders, AddressService],
  exports: [AddressService],
})
export class AddressModule {}
