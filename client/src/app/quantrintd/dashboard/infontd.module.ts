import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { InfontdRoutingModule } from './infontd-routing.module';
import { InfontdComponent } from './infontd.component';
// import {
//     TimelineComponent,
//     NotificationComponent,
//     ChatComponent
// } from './components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        InfontdRoutingModule,
        StatModule
    ],
    declarations: [
        InfontdComponent,
        // TimelineComponent,
        // NotificationComponent,
        // ChatComponent
    ]
})
export class InfontdModule {}
