/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateSaleDto {
    @IsNotEmpty()
    @IsString()
    sale_date: string;

    @IsNotEmpty()
    @IsString()
    value: string;

    @IsNotEmpty()
    currencyTypeId: string;
}