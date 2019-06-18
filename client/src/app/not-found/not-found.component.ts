import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
    var is_mobile = new RegExp('Android|webOS|iPhone|iPad|' +
        'BlackBerry|Windows Phone|'  +
        'Opera Mini|IEMobile|Mobile' ,
        'i');
    if (is_mobile.test(navigator.userAgent)) {
      //this.is_sp = true;
      this.router.navigate(['sp/page/not-found']);
    }
    else {
      this.router.navigate(['page/not-found']);
    }
  }
}
