import { Module } from '@nestjs/common';

import { FileService } from 'src/file.service';

import { Operation } from './entities/operation.entity';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';

@Module({
  controllers: [OperationsController],
  providers: [
    OperationsService,
    {
      provide: FileService,
      useFactory: () => new FileService<Operation[]>('assets/operations.json'),
    },
  ],
})
export class OperationsModule {}
