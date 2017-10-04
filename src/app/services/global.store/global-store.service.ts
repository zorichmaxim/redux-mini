import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/UserDataInterface';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/Rx';

@Injectable()
export class GlobalStoreService {
    public storage : UserInterface;

    public storageData = {
        key: new BehaviorSubject<any>(this.storage)
    };

    public changesStore = this.storageData.key.asObservable().distinctUntilChanged();
/*
    public getStorage() : UserInterface {
        return this.storageData.key.value;
    }
*/
    public changeStore(data : UserInterface) : void {
        Object.keys(this.storageData).forEach(key => this.storageData[key].next(data[key]));
    }
}
