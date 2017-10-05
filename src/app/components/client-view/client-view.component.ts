import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/views/client.service/client.service";
import { GlobalStoreService } from "../../services/global.store/global-store.service";
import { UserDataInterface } from "../../interfaces/UserDataInterface";

@Component({
    selector: 'app-client-view',
    templateUrl: './client-view.component.html',
    styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
    public currentClientModel : UserDataInterface;
    public id: string = 'key100500';

    constructor(public clientService: ClientService, public store: GlobalStoreService){
        this.store.changesStore.subscribe(
            changeData => this.currentClientModel = changeData.id,
            e => console.log('onError ' + e.message )
        )
    }

    ngOnInit() : void{
        this.currentClientModel = this.clientService.getCurrentClient(this.id);
    }
}
