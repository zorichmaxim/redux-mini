import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/views/client.service/client.service";
import { GlobalStoreService } from "../../services/global.store/global-store.service";
import { UserInterface } from "../../interfaces/UserDataInterface";

@Component({
    selector: 'app-client-view',
    templateUrl: './client-view.component.html',
    styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
    public currentClientModel : UserInterface;

    constructor(public clientService: ClientService, public store: GlobalStoreService){
        this.store.changesStore.subscribe(
            changeData => this.currentClientModel = changeData,
            e => console.log('onError ' + e.message )
        )
    }

    ngOnInit() : void {
        this.clientService.changeStore(this.currentClientModel);
    }
}
