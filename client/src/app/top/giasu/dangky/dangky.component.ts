import { Component, OnInit } from '@angular/core';
import {GiasuService} from '../giasu.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  
  formData = {username:'',password:'', role: 3, name: '', email: '', confirm_password: '',
              ngaysinh: '', giotinh: '', socmnd: '', diachicutru: '', sodienthoai: ''
              };
  // profileData = {};
  
  constructor(
  		private gs: GiasuService,
        private router: Router
   ) { }

  ngOnInit() {
  }

  onDangky()
    {
      console.log(this.formData);
      this.gs.dangky(this.formData).subscribe(
      res => {
        console.log(res)
       
      },
      error => console.log(error)
    );

       
    }
}
