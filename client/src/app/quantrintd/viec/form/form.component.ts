import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { AppService } from "../../../shared/app.service";
import { ActivatedRoute, Router } from '@angular/router';
import { constant } from "../../../shared/constant";
import { config } from "../../../shared/config";

declare var $;
window["$"] = $;
window["jQuery"] = $;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [routerTransition()]
})
export class FormComponent implements OnInit {

  private listGroup = constant.User.group;
  private listActive = constant.Active;
  private listHinhthuc = constant.Loai_CV;
  private listDanhmucviec;
  private listKhuvuc = constant.Khuvuc;
  private listCaphoc = constant.Caphoc;
  private isNew = true;  //Cho biet la Add New hay Edit
  private data = {'id': '', 'group': '', 'active': 1}; 

  constructor( 
  	private appService: AppService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.getDanhmuc();
  	this.route.params.subscribe((params)=>
    {
      if(params['id'])
      {
        this.isNew = false;
        this.appService.get('users/detail', {id: +params['id']}).subscribe((res:any) =>
        {
          console.log(res.data);
          // if(res.status == 200)
          // {
            this.data = res.data;
          // }
       });
      }
    });
  }

  //hinhthuc = 1: lay danh muc gia su (vd Toan - Ly - Hoa)
  //hinhthuc = 2: lay danh muc cho part time (vd Nhan vien cafe, Nhan vien quan bar...)
  getDanhmuc(hinhthuc){
    this.appService.get('danhmucviec', {hinhthuc_id: hinhthuc}).subscribe((res:any) => {
      //if (res.status == 200) {
        // console.log(res);
        // this.data = res.data;
         this.listDanhmucviec = res.data.data;
        // this.numberOfData = this.data.length;

      //}
    });
  }

  saveData(confirm)
  {
    // return;
    confirm = false;
    this.data['form_confirm'] = confirm;
    this.data['username'] = config.get('UID');
    console.log('Data la');
    console.log(this.data);
    // return;
    this.appService.post('quantrintd/viec/save', this.data, []).then(res =>
    {
      //console.log(this.data); return;
      // if(res.status == 200)
      // {
        
        // if(JSON.parse(config.get('CURRENT_USER')).id == this.data.id && this.data.active == 0)
        // {
        //   config.del('AUTH_TOKEN');
        //   config.del('CURRENT_USER');
        //   this.router.navigate(['/login']);
        // }else{
         this.router.navigate(['/quantrintd/viec']);
          // }
        
      // }
    });
  }

  // test(){
  //   // alert("test jquery");
  //   $('#dada').hide();
  //   jQuery.noConflict();
  //   $('#formConfirm').modal('show');
  // }

}
