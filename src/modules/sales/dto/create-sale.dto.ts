/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { CurrencyType } from 'src/modules/currency-types/entities/currency-type.entity';
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