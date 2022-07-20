import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly repository: Repository<Product>,
    private readonly categoryService: CategoryService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const category = await this.categoryService.findOne(
      createProductDto.categoryId,
    );

    if (!category) {
      throw new NotFoundException(
        `Category ${createProductDto.categoryId}, not Found !`,
      );
    }

    const product = await this.repository.create(createProductDto);
    product.category = category;
    return this.repository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.repository.find({ relations: { category: true } });
  }

  findOne(id: string) {
    return this.repository.findOne({
      where: { id: id },
      relations: { category: true },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.repository.preload({
      id: id,
      ...updateProductDto,
    });

    if (!product) {
      throw new NotFoundException(`Product ${id}, not Found !`);
    }

    if (updateProductDto.categoryId) {
      const category = await this.categoryService.findOne(
        updateProductDto.categoryId,
      );

      if (!category) {
        throw new NotFoundException(
          `Currency Type ${updateProductDto.categoryId}, not Found !`,
        );
      }

      product.category = category;
    }

    return this.repository.save(product);
  }

  async remove(id: string) {
    const product = await this.repository.findOne({ where: { id: id } });
    return this.repository.delete(product);
  }
}
