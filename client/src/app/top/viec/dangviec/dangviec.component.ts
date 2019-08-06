import { Component, OnInit } from '@angular/core';
import { TViecService } from '../viec.service';
import {Router} from "@angular/router";
import { CommonService } from '../../../shared/common.service';
@Component({
  selector: 'app-dangviec',
  templateUrl: './dangviec.component.html',
  styleUrls: ['./dangviec.component.css']
})
export class DangviecComponent implements OnInit {
  dsXa;
  dsHuyen;
  dsTinh;
  dsLop;
  dsMonhoc;
	formData = {};
  constructor(	private viecservice: TViecService,
            private commonService: CommonService,
        		private router: Router) { }

  ngOnInit() {
    this.commonService.getAllTinhs().subscribe(
      res => {
        console.log(res);
        this.dsTinh = res.data;
      }
    );

    this.commonService.getAllLophocs().subscribe(
      res=> {
        console.log(res);
        this.dsLop = res.data;
      });
    // this.dsHuyen = this.diachiService.getHuyentheoTinh();
    // this.dsXa = this.diachiService.getXatheoHuyen();
    this.commonService.getAllMonhocs().subscribe(
      res => {
        console.log(res);
        this.dsMonhoc = res.data;
      }
    );
  }

  onDangky()
  {
    console.log(this.formData);
    this.viecservice.dangviec(this.formData).subscribe(
      	res => {
        	console.log(res)       
      	},
      	error => console.log(error)
    );       
  }

  loadHuyen(tinh_id){
      console.log(tinh_id);
      this.commonService.getHuyentheoTinh(tinh_id).subscribe(
      (res:any) => {
        console.log(res);
        this.dsHuyen = res.data;
      }
    );
  }

  loadXa(huyen_id){
    console.log(huyen_id);
    this.commonService.getXatheoHuyen(huyen_id).subscribe(
      (res:any) => {
        console.log(res);
        this.dsXa = res.data;
      }
    );
  }
}
