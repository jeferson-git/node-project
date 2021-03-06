import { Module } from '@nestjs/common';
import { CurrencyTypesService } from './currency-types.service';
import { CurrencyTypesController } from './currency-types.controller';
import { currencyTypeProviders } from './currency-types.providers';
import { DatabaseModule } from 'src/database/database.module';
import { AbilityModule } from '../ability/ability.module';

@Module({
  imports: [DatabaseModule, AbilityModule],
  exports: [CurrencyTypesService],
  controllers: [CurrencyTypesController],
  providers: [...currencyTypeProviders, CurrencyTypesService],
})
export class CurrencyTypesModule {}
