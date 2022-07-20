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

import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AbilitiesGuard } from '../ability/ability.guards';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  findAll() {
    return this.providersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  findOne(@Param('id') id: string) {
    return this.providersService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  update(
    @Param('id') id: string,
    @Body() updateProviderDto: UpdateProviderDto,
  ) {
    return this.providersService.update(id, updateProviderDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AbilitiesGuard)
  remove(@Param('id') id: string) {
    return this.providersService.remove(id);
  }
}
