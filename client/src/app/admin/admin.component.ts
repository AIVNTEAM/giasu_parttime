import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../shared/loader.service";
@Component({
    selector: 'admin-layout',
    templateUrl: './admin.component.html',
    // styleUrls: ['../../styles/app.scss']
    styleUrls: [
    	'./admin.component.scss',
    	'../../assets/frontend/css/font-awesome.min.css',
    ]
})
export class AdminComponent implements OnInit {

    collapedSideBar: boolean;

    constructor(
        public loaderService: LoaderService) {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
