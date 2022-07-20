import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProviders } from './category.providers';
import { DatabaseModule } from 'src/database/database.module';
import { AbilityModule } from '../ability/ability.module';

@Module({
  imports: [DatabaseModule, AbilityModule],
  exports: [CategoryService],
  controllers: [CategoryController],
  providers: [...categoryProviders, CategoryService],
})
export class CategoryModule {}
