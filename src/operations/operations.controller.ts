import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { Operation } from './entities/operation.entity';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  create(@Body() createOperationDto: CreateOperationDto) {
    return this.operationsService.create(createOperationDto);
  }

  @Get()
  findAll(
    @Query('type') type?: 'incoming' | 'outgoing',
    @Query('counterparty') counterparty?: string,
  ): Operation[] {
    return this.operationsService.findAll(type, counterparty);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.operationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateOperationDto: UpdateOperationDto,
  ) {
    return this.operationsService.update(id, updateOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.operationsService.remove(id);
  }
}
