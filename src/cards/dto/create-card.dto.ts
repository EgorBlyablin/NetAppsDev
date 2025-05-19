import { IsNumber, IsString } from 'class-validator';

export class CreateCardDto {
  @IsNumber()
  id: number;

  @IsString()
  src: string;

  @IsNumber()
  title: string;

  @IsString()
  text: string;
}
