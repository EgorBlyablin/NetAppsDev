import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OperationsModule } from './operations/operations.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [OperationsModule],
})
export class AppModule {}
