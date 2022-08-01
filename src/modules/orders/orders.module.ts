import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderProvider } from './orders.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  exports: [OrdersService],
  providers: [...orderProvider, OrdersService],
})
export class OrdersModule {}
