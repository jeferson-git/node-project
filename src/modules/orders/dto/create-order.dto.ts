/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { IOrderInterface } from '../../../interfaces/IOrderInterface';

export class CreateOrderDto implements IOrderInterface {
  @IsString()
  @IsNotEmpty()
  saleId: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  unitPrice: string;

  @IsNotEmpty()
  @IsString()
  total: string;
}
