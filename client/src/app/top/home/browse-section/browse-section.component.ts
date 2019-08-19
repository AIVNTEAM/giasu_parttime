import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CommonService } from "../../../shared/common.service";
import {constant} from "../../../shared/constant";

@Component({
  selector: 'browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.css']
})
export class BrowseSectionComponent implements OnInit {

  private path = constant.BASE_URL;	//de load hinh anh
  private dsmh;
  constructor(private router: Router,
        private route: ActivatedRoute,
        // private appService: AppService,
        private commonService: CommonService) { }

  ngOnInit() {
  	this.laydsmh();
  }

  laydsmh(){
    this.commonService.getAllMonhocs().subscribe(
      res => {
        this.dsmh = res.data;
      }
    )
  }

  show_congviec(id){
  	console.log("cac cong viec cho mon hoc: " + id);
  	this.router.navigate(['tmonhoc/' + id]);
  }

}
