import {Component} from '@angular/core';
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";

@Component({
  moduleId: module.id,
  selector: 'transaction-create',
  templateUrl: 'transaction-create.component.html',
  styleUrls: ['transaction-create.component.css']
})
export class TransactionCreateComponent {

  transaction = new Transaction(null, null);


  constructor(private transactionService:TransactionService) {
  }

  onSubmit() {
    this.transactionService.addTransaction(this.transaction);
  }

  getTransactionsTypes():string[] {
    return this.transactionService.getTransactionsTypes();
  }

}
