import { IsNotEmpty, IsString } from 'class-validator';
import { IProductInteface } from 'src/interfaces/IProductInterface';
export class CreateProductDto implements IProductInteface {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  stock: number;

  @IsNotEmpty()
  categoryId: string;
}
