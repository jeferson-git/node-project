import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IContactInterface } from 'src/interfaces/IContactInterface';

export class CreateContactDto implements IContactInterface {
  @IsNotEmpty()
  @IsString()
  cel: string;

  @IsOptional()
  @IsString()
  alternativeContact?: string;
}
