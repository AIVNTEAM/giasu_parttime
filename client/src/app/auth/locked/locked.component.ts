import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styles: [],
    animations: [routerTransition()]
})
export class LockedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  unlock(event){
    event.preventDefault();
    this.router.navigate(['/dashboard/analytics'])
  }



}
