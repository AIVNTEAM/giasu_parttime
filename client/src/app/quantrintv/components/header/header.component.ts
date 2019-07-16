import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AppService} from "../../../shared/app.service";
import {config} from "../../../shared/config";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public username;

    constructor(private translate: TranslateService, 
        public router: Router,
        private appService: AppService,) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        this.username = JSON.parse(config.get('CURRENT_USER', ''));
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
        // this.appService.get('users/logout').then(res =>
        // {
        //   if(res.status == 200)
        //   {
            config.del('AUTH_TOKEN');
            config.del('CURRENT_USER');
            config.del('ROLE_USER');

            console.log("token luc nay: " + config.get('AUTH_TOKEN'));
        //   }
        // });
        this.router.navigate(['/auth/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
