import {Transaction} from "./transaction";
import {Injectable} from "@angular/core";

@Injectable()
export class TransactionService {

  private transactions:Transaction[] = [];
  private transactionsTypes:string[] = ['Nourriture', 'Transport'];

  constructor() {
  }

  addTransaction(transaction:Transaction):void {
    this.transactions.push(transaction);
  }

  getTransactions():Transaction[] {
    return this.transactions;
  }

  getTransactionsTypes():string[] {
    return this.transactionsTypes;
  }
}
