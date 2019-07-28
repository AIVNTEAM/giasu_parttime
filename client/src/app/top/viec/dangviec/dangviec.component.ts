import { Component, OnInit } from '@angular/core';
import { ViecService } from '../viec.service';
import {Router} from "@angular/router";
import { DiachiService } from '../../../shared/diachi.service';
@Component({
  selector: 'app-dangviec',
  templateUrl: './dangviec.component.html',
  styleUrls: ['./dangviec.component.css']
})
export class DangviecComponent implements OnInit {
  dsXa;
  dsHuyen;
  dsTinh;
  dsMonhoc;
	formData = {username:'',password:'', role: 3, name: '', email: '', confirm_password: '',
              ngaysinh: '', giotinh: '', socmnd: '', diachicutru: '', sodienthoai: ''
              };
  constructor(	private viecservice: ViecService,
            private diachiService: DiachiService,
        		private router: Router) { }

  ngOnInit() {
    this.diachiService.getAllTinhs().subscribe(
      res => {
        console.log(res);
        this.dsTinh = res.data;
      }
    );
    // this.dsHuyen = this.diachiService.getHuyentheoTinh();
    // this.dsXa = this.diachiService.getXatheoHuyen();
    this.viecservice.getMonhoc().subscribe(
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
      this.diachiService.getHuyentheoTinh(tinh_id).subscribe(
      (res:any) => {
        console.log(res);
        this.dsHuyen = res.data;
      }
    );
  }

  loadXa(huyen_id){
    console.log(huyen_id);
    this.diachiService.getXatheoHuyen(huyen_id).subscribe(
      (res:any) => {
        console.log(res);
        this.dsXa = res.data;
      }
    );
  }
}
