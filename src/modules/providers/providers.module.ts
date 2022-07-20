import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AbilityModule } from '../ability/ability.module';
import { providerProviders } from './providers.providers';

@Module({
  imports: [DatabaseModule, AbilityModule],
  exports: [ProvidersService],
  controllers: [ProvidersController],
  providers: [...providerProviders, ProvidersService],
})
export class ProvidersModule {}
