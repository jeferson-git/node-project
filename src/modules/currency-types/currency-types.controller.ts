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
import { AbilitiesGuard } from '../ability/ability.guards';
import { CheckAbilities } from '../ability/ability.decorator';
import { Action } from '../ability/ability.factory';
import { User } from '../users/entities/user.entity';

@Controller('currency-types')
export class CurrencyTypesController {
  constructor(private readonly currencyTypesService: CurrencyTypesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({
    action: Action.Create,
    subject: User,
  })
  create(@Body() createCurrencyTypeDto: CreateCurrencyTypeDto) {
    return this.currencyTypesService.create(createCurrencyTypeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({
    action: Action.Create,
    subject: User,
  })
  findAll() {
    return this.currencyTypesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({
    action: Action.Create,
    subject: User,
  })
  findOne(@Param('id') id: string) {
    return this.currencyTypesService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({
    action: Action.Create,
    subject: User,
  })
  update(
    @Param('id') id: string,
    @Body() updateCurrencyTypeDto: UpdateCurrencyTypeDto,
  ) {
    return this.currencyTypesService.update(id, updateCurrencyTypeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({
    action: Action.Create,
    subject: User,
  })
  remove(@Param('id') id: string) {
    return this.currencyTypesService.remove(id);
  }
}
