import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';

import { Category } from './entities/category.entity';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly repository: Repository<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    const category = this.repository.create(createCategoryDto);
    return this.repository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Category> {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.repository.preload({
      id: id,
      ...updateCategoryDto,
    });

    if (!category) {
      throw new NotFoundException(`Category ${id}, not found`);
    }
    return this.repository.save(category);
  }

  async remove(id: string) {
    const category = await this.repository.findOne({ where: { id: id } });
    return this.repository.delete(category);
  }
}
