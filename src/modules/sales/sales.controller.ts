import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  Request,
  Req,
  Query,
} from '@nestjs/common';

import { SalesService } from './sales.service';

import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { User } from '../users/entities/user.entity';
import { CheckAbilities } from '../ability/ability.decorator';
import { AbilitiesGuard } from '../ability/ability.guards';

@Controller('sales')
export class SalesController {
  constructor(
    private readonly salesService: SalesService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({
    action: Action.Create,
    subject: User,
  })
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/reports/pdf')
  reports(@Query() params: Array<string>) {
    return this.salesService.reports(params);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(id, updateSaleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(id);
  }
}
