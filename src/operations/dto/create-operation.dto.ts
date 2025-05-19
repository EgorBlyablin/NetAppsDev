import { Type } from 'class-transformer';
import { IsDate, IsIn, IsNumber, IsString } from 'class-validator';

export class CreateOperationDto {
  @IsIn(['incoming', 'outgoing'])
  type: 'incoming' | 'outgoing';

  @IsString()
  counterparty: string;

  @IsNumber()
  amount: number;

  @Type(() => Date)
  @IsDate()
  timestamp: Date;
}
