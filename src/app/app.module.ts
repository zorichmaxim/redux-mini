import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GlobalStoreService } from "./services/global.store/global-store.service";
import { CustomerService } from "./services/views/customer.service/customer.service";
import { ClientService } from "./services/views/client.service/client.service";
import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { ClientViewComponent } from './components/client-view/client-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalStoreService, CustomerService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
