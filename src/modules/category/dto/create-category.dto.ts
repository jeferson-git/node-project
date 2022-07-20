import { IsString } from 'class-validator';
import { ICategoryInterface } from '../../../interfaces/ICategoryInterface';

export class CreateCategoryDto implements ICategoryInterface {
  @IsString()
  name: string;
}
