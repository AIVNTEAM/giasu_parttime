import { Component, OnInit } from '@angular/core';
// import {AppService} from "../../shared/app.service";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import {config} from "../../shared/config";
import {flash} from "../../shared/flash/flash";
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit
{
    
    constructor
    (
        // private appService: AppService,
        private auth: AuthService,
        private router: Router
    ) {}

    formData = {username:'',password:''};

    onSubmit()
    {
        this.auth.loginUser(this.formData).subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.token)

          //phan tich token de xem user co role la gi? 
          // chuyen vao dia chi tuong ung?
          var user = JSON.parse(atob(res.token.split('.')[1]));
          console.log('user: ');
          console.log(user);
          var role = user.user.role;
          if (role == 1){
              this.router.navigate(['/admin']);
          } else if (role == 2){
              this.router.navigate(['/quantrintd']);
          } else {
              this.router.navigate(['/quantrintv']);
          }
          // this.router.navigate(['/admin'])
        },
        error => console.log(error)
      );

        /*
        this.appService.post('users/login',this.formData).then(res =>
        {

            // if(res.status == 200)
            // {
                // let data = res.json();
                let data = res.data; console.log(data.role);
                config.set('UID', data.username_id);
                config.set('AUTH_TOKEN', data.token);
                // config.set('CURRENT_USER', JSON.stringify(data.profile));
                config.set('CURRENT_USER', data.profile);
                //CongThanh bo sung role
                config.set('ROLE_USER', data.role);

                flash.success('You are now logged in');

                //CongThanh tuy vao role ma chuyen huong
                if (data.role == 1) { //admin
                    this.router.navigate(['/admin']);
                } else if (data.role == 2){ //nguoi tuyen dung
                    this.router.navigate(['/quantrintd']);
                } else {    //nguoi tim viec
                    console.log('Vao phan quan tri nguoi tim viec');
                    this.router.navigate(['/quantrintv']);
                }
                // this.router.navigate(['admin/user']);
            // }
        });
        */
    }

    ngOnInit()
    {
    }
}
