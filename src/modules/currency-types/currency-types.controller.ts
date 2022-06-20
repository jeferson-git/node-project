import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';

import { CurrencyTypesService } from './currency-types.service';
import { CreateCurrencyTypeDto } from './dto/create-currency-type.dto';
import { UpdateCurrencyTypeDto } from './dto/update-currency-type.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('currency-types')
export class CurrencyTypesController {
  constructor(private readonly currencyTypesService: CurrencyTypesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCurrencyTypeDto: CreateCurrencyTypeDto) {
    return this.currencyTypesService.create(createCurrencyTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.currencyTypesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currencyTypesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurrencyTypeDto: UpdateCurrencyTypeDto,
  ) {
    return this.currencyTypesService.update(id, updateCurrencyTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currencyTypesService.remove(id);
  }
}
