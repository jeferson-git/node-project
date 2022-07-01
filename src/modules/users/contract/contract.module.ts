import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { contractProviders } from './contract.provider';
import { DatabaseModule } from 'src/database/database.module';
import { AbilityModule } from 'src/modules/ability/ability.module';

@Module({
  imports: [DatabaseModule, AbilityModule],
  controllers: [ContractController],
  providers: [...contractProviders, ContractService],
  exports: [ContractService],
})
export class ContractModule {}
