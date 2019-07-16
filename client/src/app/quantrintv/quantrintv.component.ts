import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-layout',
    templateUrl: './quantrintv.component.html',
    // styleUrls: ['../../styles/app.scss']
    styleUrls: [
    	'./quantrintv.component.scss',
    	'../../assets/frontend/css/font-awesome.min.css',
    ]
})
export class QuantrintvComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
