import { Injectable } from '@angular/core';
import { GlobalStoreService } from "../../global.store/global-store.service";
import { UserDataInterface } from "../../../interfaces/UserDataInterface";

@Injectable()
export class CustomerService {

    constructor(private store: GlobalStoreService) {}

    public getCurrentCustomer(id) : UserDataInterface {
        const currentCustomer = this.store.getCurrentState(id);
        this.store.changeStore(Object.assign({}, {[id] : currentCustomer}), id);
        return currentCustomer;
    }
}
