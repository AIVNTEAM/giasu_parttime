import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from "../../shared/app.service";
import {flash} from "../../shared/flash/flash";
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [routerTransition()]
})
export class ForgotComponent implements OnInit {

  constructor(
      private router: Router,
      private appService: AppService
  ) { }

  ngOnInit() {
  }

  onSubmit(email){
    this.appService.post('users/resetPassword', {email: email}).then(response => {
      if(response.status == 200) {
        flash.success(this.appService.trans('The new password will be sent to your email'),true);
      } else if(response.status == 404) {
        flash.error(this.appService.trans('Email does not exist on system'),true);
      }
    });
  }
}
