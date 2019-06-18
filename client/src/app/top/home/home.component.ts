import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from "../../shared/app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

}
