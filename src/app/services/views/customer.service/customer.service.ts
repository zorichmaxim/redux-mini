import { Injectable } from '@angular/core';
import { IndexedDB } from "../../../decorators/indexedDB/indexedDB.decorator";
import { GlobalStoreService } from "../../global.store/global-store.service";
import { UserInterface } from "../../../interfaces/UserDataInterface";

@Injectable()
export class CustomerService {
    @IndexedDB() public currentCustomer : UserInterface;

    constructor(private store: GlobalStoreService) {}

    public getCurrentCustomer() : UserInterface {
        return this.currentCustomer;
    }

    public changeDBCustomerData(modificationData) {
        this.currentCustomer = modificationData;
    }

    public changeStore(modification) : void {
        this.store.changeStore(Object.assign({}, this.currentCustomer, {modification}))
    }
}
