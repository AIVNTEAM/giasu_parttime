import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../shared/app.service";
import { constant } from "../../../shared/constant";
import { config } from "../../../shared/config";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../router.animations';

import { PaginateService } from '../../shared/paginate/paginate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {

  private data;
  private bookings;
  private page:number = 1;
  private filter = {'group': '', 'active': ''};
  private sort = {'field': 'id', 'direction': 'asc','created_at':'asc'};
  private listGroup = constant.User.group;
  private listActive = constant.Active;
  private numberOfData: number;
  private currentUser;
   
    
  constructor(private appService:AppService,
  	private route:ActivatedRoute,
    private router:Router,
    private translate: TranslateService,
    private pagerService: PaginateService
    ) { }

  ngOnInit() {
  	this.currentUser = JSON.parse(config.get('CURRENT_USER'));
  	window.scrollTo(0,0);
    this.route.params.subscribe((params:Params) => this.getBookings(params['page']));
  }

  getBookings(page:number = 1) {

    var paramsQuery = {
      'select': 'id,username,email,group,active,created_at',
    };

    paramsQuery['sort'] = this.sort.field;
    paramsQuery['direction'] = this.sort.direction;
    var paramsApi = this.appService.generateQuery(this.filter, page, paramsQuery);
    
    console.log(paramsApi);

    this.appService.get('bookings', paramsApi).subscribe((res:any) => {
      //if (res.status == 200) {
        console.log(res);
        this.data = res.data;
        this.bookings = this.data.data;
        // this.numberOfData = this.data.length;

      //}
    });
  }

  changeSort(field) {
    this.router.navigateByUrl('/admin/bookings');
    if (this.sort.field == field) {
      this.sort.direction = this.sort.direction=='asc'?'desc':'asc';
    } else {
      this.sort.field = field;
      this.sort.direction = 'desc';
    }
    this.getBookings();
  }

  change()
  {
    this.router.navigateByUrl('/admin/bookings');
    this.getBookings();
  }

  checkGroup(group) {
    return this.appService.checkGroup(group);
  }

  resetFilter(){
		this.filter = {'group': '', 'active': ''};
		this.getBookings();
	}

  delete(booking) {
    // this.layoutService.confirmDelete(() => {
      // this.appService.post('booking/delete', {id: user.id}).then(response => {
        // if (response.status == 200)
        // {
          // flash.success('Profile has been deleted', true);
          // if(JSON.parse(config.get('CURRENT_USER')).id == user.id)
          // {
          //   config.del('AUTH_TOKEN');
          //   config.del('CURRENT_USER');
          //   this.router.navigate(['admin/auth/login']);
          // }
          // else
          // {
          //   this.route.params.subscribe((params:Params) => this.getUsers(params['page']));
          // }
        //}
      // });
    // });
  }

  changeStatus(id: number, active, model, current_page = 1) {
    this.appService.post('change_status', {'id' :id, 'active': active, 'model': model}).then(res => {
      if (res.status == 200) {
        this.getBookings(current_page);
      }
    });
  }

  changeLang(language: string) {
        this.translate.use(language);
  }

}
