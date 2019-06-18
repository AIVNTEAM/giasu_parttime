import { Component, OnInit } from '@angular/core';

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

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
