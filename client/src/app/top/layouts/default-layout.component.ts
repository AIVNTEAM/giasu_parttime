import { Component, OnInit,ViewEncapsulation } from '@angular/core';
// import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: [
  	'../../../assets/frontend/css/jquery-ui.css',
    '../../../assets/frontend/css/bootstrap.min.css',
    '../../../assets/frontend/css/owl.carousel.css',
    '../../../assets/frontend/css/owl.theme.css',
    '../../../assets/frontend/css/owl.transitions.css',
    '../../../assets/frontend/css/font-awesome.min.css',
    '../../../assets/frontend/css/animate.css',
    '../../../assets/frontend/css/fw.css',
    '../../../assets/frontend/css/finder.css'
  ],encapsulation: ViewEncapsulation.None
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
