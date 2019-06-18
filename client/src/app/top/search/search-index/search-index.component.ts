import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from "../../../shared/app.service";
import { constant } from "../../../shared/constant";
import {count} from "rxjs/operator/count";
import * as moment from 'moment';

@Component({
  selector: 'app-search-index',
  templateUrl: './search-index.component.html',
  styleUrls: ['./search-index.component.css']
})
export class SearchIndexComponent implements OnInit {

  private params;  //cac cap tham so tim kiem
  private dscongviec;

  constructor(private router: Router,
        private route: ActivatedRoute,
        private appService:AppService) { }

  ngOnInit() {
  	this.timCongviec();
  }

  timCongviec(){
  	//CongThanh: lay tham so tren URL
  	//trong Angular thuong lay tham so dang subscribe route.paramMap hay route.params
  	this.route.params.subscribe((params) => {
      //co tham so tren URL => chuyen thanh cac cap: par1 = abc, par2 = def,...
  		this.params = this.appService.exportUrl(params);
  		//neu co keyword thi tim theo keyword
  		if (this.params.key_word){
  			this.timCongviectheoKeyword(this.params);
  		} else {
  			//tim cong viec theo cac dieu kien
  			this.timCongviectheoCacDK(this.params);
  		}
  	});
  }

  timCongviectheoKeyword(params){
  	let search_name = params.key_word;
    let sort = params.sort ? params.sort : "mucluong";
    let page = params.page ? params.page : 1;
    
  	this.appService.get('congviec/timkiem', {name: search_name, sort: sort, page: page})
  	.subscribe((res:any) => {
  		//if (res.status == 200){
  			let dscongviec = res.data;
  			this.dscongviec = dscongviec;
  		//}
    });
  }

  timCongviectheoCacDK(params){
  	this.appService.get('congviec/timkiem', params)
  	.subscribe((res:any) => {
  		//if (res.status == 200){
  			let dscongviec = res.data;
  			this.dscongviec = dscongviec;
  		//}
    });
  }

}
