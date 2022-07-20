import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Put,
} from '@nestjs/common';
import { CheckAbilities } from '../ability/ability.decorator';
import { Action } from '../ability/ability.factory';
import { AbilitiesGuard } from '../ability/ability.guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../users/register/entities/user.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  // @CheckAbilities({
  //   action: Action.Create,
  //   subject: User,
  // })
  create(@Req() @Body() createCategoryDto: CreateCategoryDto, req: any) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
