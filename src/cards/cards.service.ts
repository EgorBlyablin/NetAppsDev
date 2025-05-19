import { Injectable } from '@nestjs/common';

import { FileService } from 'src/file.service';

import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
  constructor(private fileService: FileService<Card[]>) {}

  create(createCardDto: CreateCardDto) {
    const cards = this.fileService.read();
    this.fileService.add({ ...createCardDto, id: cards.length });
  }

  findAll(title?: string): Card[] {
    const cards = this.fileService.read();

    return title
      ? cards.filter((card) =>
          card.title.toLowerCase().includes(title.toLowerCase()),
        )
      : cards;
  }

  findOne(id: number): Card | null {
    const cards = this.fileService.read();

    return cards.find((card) => card.id === id) ?? null;
  }

  update(id: number, updateCardDto: UpdateCardDto): void {
    const cards = this.fileService.read();

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, ...updateCardDto } : card,
    );

    this.fileService.write(updatedCards);
  }

  remove(id: number): void {
    const filteredCards = this.fileService
      .read()
      .filter((card) => card.id !== id);

    this.fileService.write(filteredCards);
  }
}
