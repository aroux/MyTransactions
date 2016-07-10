import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {TransactionService} from "./transaction/transaction.service";
import {TransactionCreateComponent} from "./transaction/create/transaction-create.component";
import {TransactionListComponent} from "./transaction/list/transaction-list.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [TransactionService],
  directives: [ROUTER_DIRECTIVES,
    TransactionCreateComponent,
    TransactionListComponent]
})
export class AppComponent {
  title = 'app works!';
}
