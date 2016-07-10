import { provideRouter, RouterConfig } from '@angular/router';
import {TransactionCreateComponent} from "./transaction/create/transaction-create.component";
import {TransactionListComponent} from "./transaction/list/transaction-list.component";

export const routes: RouterConfig = [
  { path: 'transaction-create', component: TransactionCreateComponent },
  { path: 'transaction-list', component: TransactionListComponent },
  { path: '', redirectTo: 'transaction-create', pathMatch:'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
