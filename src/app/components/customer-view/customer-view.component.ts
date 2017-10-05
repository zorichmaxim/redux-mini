import { Component } from '@angular/core';
import { CustomerService } from "../../services/views/customer.service/customer.service";
import { GlobalStoreService } from "../../services/global.store/global-store.service";
import { UserDataInterface } from "../../interfaces/UserDataInterface";

@Component({
    selector: 'app-customer-view',
    templateUrl: './customer-view.component.html',
    styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
    public currentCustomerModel : UserDataInterface;
    public id: string = 'key100000';
    constructor(private customerService: CustomerService, private store: GlobalStoreService) {
        this.store.changesStore.subscribe(
            changeData => this.currentCustomerModel = changeData.id,
            e => console.log('onError ' + e.message )
        )
    }

    ngOnInit() : void {
        this.currentCustomerModel = this.customerService.getCurrentCustomer(this.id);
    }
}
