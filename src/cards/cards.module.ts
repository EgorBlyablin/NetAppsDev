import { Module } from '@nestjs/common';

import { FileService } from 'src/file.service';

import { Card } from './entities/card.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  controllers: [CardsController],
  providers: [
    CardsService,
    {
      provide: FileService,
      useFactory: () => new FileService<Card[]>('assets/cards.json'),
    },
  ],
})
export class CardsModule {}
