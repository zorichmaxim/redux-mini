import { Injectable } from '@angular/core';
import { GlobalStoreService } from "../../global.store/global-store.service";
import { UserDataInterface } from "../../../interfaces/UserDataInterface";

@Injectable()
export class ClientService {

    constructor(private store : GlobalStoreService) {}

    public getCurrentClient(id: string) : UserDataInterface {
        const currentClient = this.store.getCurrentState(id);
        this.store.changeStore(Object.assign({}, {[id] : currentClient}), id);
        return currentClient;
    }
}
