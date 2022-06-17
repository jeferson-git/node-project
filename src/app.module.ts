import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SalesModule } from './module/sales/sales.module';
import { SalesModule } from './modules/sales/sales.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    SalesModule,
  ],
})
export class AppModule {}
