import { Injectable } from '@nestjs/common';

import { FileService } from 'src/file.service';

import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { Operation } from './entities/operation.entity';

@Injectable()
export class OperationsService {
  constructor(private fileService: FileService<Operation[]>) {}

  create(createOperationDto: CreateOperationDto) {
    const operations = this.fileService.read();
    this.fileService.add({ ...createOperationDto, id: operations.length });
  }

  findAll(type?: 'incoming' | 'outgoing', counterparty?: string): Operation[] {
    const operations = this.fileService.read();

    return operations.filter((operation) => {
      const matchesType = type ? operation.type === type : true;
      const matchesCounterparty = counterparty
        ? operation.counterparty
            .toLowerCase()
            .includes(counterparty.toLowerCase())
        : true;

      return matchesType && matchesCounterparty;
    });
  }

  findOne(id: number): Operation | null {
    const operations = this.fileService.read();

    return operations.find((operation) => operation.id === id) ?? null;
  }

  update(id: number, updateOperationDto: UpdateOperationDto): void {
    const operations = this.fileService.read();

    const updatedOperations = operations.map((operation) =>
      operation.id === id ? { ...operation, ...updateOperationDto } : operation,
    );

    this.fileService.write(updatedOperations);
  }

  remove(id: number): void {
    const filteredOperations = this.fileService
      .read()
      .filter((operation) => operation.id !== id);

    this.fileService.write(filteredOperations);
  }
}
