import { Injectable } from '@angular/core';
import { UserDataInterface, UserInterface } from '../../interfaces/UserDataInterface';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { IndexedDB } from "../../decorators/indexedDB/indexedDB.decorator";
import 'rxjs/Rx';

@Injectable()
export class GlobalStoreService {
    @IndexedDB() public storage : UserInterface;

    public storageData = {
        key: new BehaviorSubject<UserInterface>(this.storage)
    };

    public changesStore = this.storageData.key.asObservable().distinctUntilChanged();

    public getCurrentState(id:string) : UserDataInterface {
        return this.storage[id];
    }

    public changeStore(data : UserInterface, id: string) : void {
        Object.keys(this.storageData).forEach(key => this.storageData[key].next(data[id]));
        this.storage = data;
    }
}
