/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCurrencyTypeDto {
    @IsNotEmpty()
    @MaxLength(150)
    @MinLength(1)
    @IsString()
    name: string
}
