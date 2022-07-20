import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AbilityModule } from '../ability/ability.module';
import { productsProviders } from './products.providers';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [DatabaseModule, CategoryModule, AbilityModule],
  controllers: [ProductsController],
  providers: [...productsProviders, ProductsService],
})
export class ProductsModule {}
