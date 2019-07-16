import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { InfontvRoutingModule } from './infontv-routing.module';
import { InfontvComponent } from './infontv.component';
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
        InfontvRoutingModule,
        StatModule
    ],
    declarations: [
        InfontvComponent,
        // TimelineComponent,
        // NotificationComponent,
        // ChatComponent
    ]
})
export class InfontvModule {}
