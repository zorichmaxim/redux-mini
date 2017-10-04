import {Component} from '@angular/core';
import {CustomerService} from "../../services/views/customer.service/customer.service";
import {GlobalStoreService} from "../../services/global.store/global-store.service";
import {UserInterface} from "../../interfaces/UserDataInterface";

@Component({
    selector: 'app-customer-view',
    templateUrl: './customer-view.component.html',
    styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
    public currentCustomerModel : UserInterface;

    constructor(private clientService: CustomerService, private store: GlobalStoreService) {
        this.store.changesStore.subscribe(
            changeData => this.currentCustomerModel = changeData,
            e => console.log('onError ' + e.message )
        )
    }

    ngOnInit() : void {
        this.currentCustomerModel = this.clientService.getCurrentCustomer();
    }

}
