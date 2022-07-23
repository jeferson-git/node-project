import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { contactProviders } from './contact.provider';
import { DatabaseModule } from 'src/database/database.module';
import { AbilityModule } from 'src/modules/ability/ability.module';

@Module({
  imports: [DatabaseModule, AbilityModule],
  controllers: [ContactController],
  providers: [...contactProviders, ContactService],
  exports: [ContactService],
})
export class ContactModule {}
