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

  private listHinhthuc = constant.Loai_CV;
  private listActive = constant.Active;
  private isNew = true;  //Cho biet la Add New hay Edit
  private data = {'id': '', 'tendanhmuc': '', 'hinhthuc_id': 0, 'active': 1}; 

  constructor( 
  	private appService: AppService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe((params)=>
    {
      if(params['id'])
      {
        this.isNew = false;
        this.appService.get('danhmucviec/detail', {id: +params['id']}).subscribe((res:any) =>
        {
          console.log("danhmucviec tra ve: ");
          
          // if(res.status == 200)
          // {
            this.data = res.data.data;
            console.log(this.data);
          // }
       });
      }
    });
  }

  saveData(confirm)
  {
    // return;
    confirm = false;
    this.data['form_confirm'] = confirm;

    this.appService.post('danhmucviec/save', this.data, []).then(res =>
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
         this.router.navigate(['/admin/danhmucviec']);
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
