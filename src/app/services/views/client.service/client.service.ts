import { Injectable } from '@angular/core';
import { IndexedDB } from "../../../decorators/indexedDB/indexedDB.decorator";
import { GlobalStoreService } from "../../global.store/global-store.service";
import { UserInterface } from "../../../interfaces/UserDataInterface";

@Injectable()
export class ClientService {
    @IndexedDB() public currentClient : UserInterface;

    constructor(private store : GlobalStoreService) {}

    public getCurrentClient() : UserInterface {
        return this.currentClient;
    }

    public changeDBClientData(modificationData) {
        this.currentClient = modificationData;
    }

    public changeStore(modification) : void {
        this.store.changeStore(Object.assign({}, this.currentClient, {modification}));
    }
}
