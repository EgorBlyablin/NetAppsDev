export class Operation {
  id: number;
  type: 'incoming' | 'outgoing';
  counterparty: string;
  amount: number;
  timestamp: Date;
}
