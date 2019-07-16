import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-layout',
    templateUrl: './quantrintd.component.html',
    // styleUrls: ['../../styles/app.scss']
    styleUrls: [
    	'./quantrintd.component.scss',
    	'../../assets/frontend/css/font-awesome.min.css',
    ]
})
export class QuantrintdComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
