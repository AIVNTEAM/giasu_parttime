import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
    animations: [routerTransition()]
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(event){
    event.preventDefault();
    this.router.navigate(['/dashboard'])
  }

}
