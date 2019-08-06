import { Component, OnInit } from '@angular/core';
import { ViecService } from '../viec.service';
import { CommonService } from '../../../shared/common.service';
import { ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dsXa;
  dsHuyen;
  dsTinh;
  dsLop;
  dsMonhoc;
  isNew = true;  //Cho biet la Add New hay Edit
  data = {}; 
  listActive = { 1 : "Active", 0 : "Deactive"};

  constructor( 
  	private viecService: ViecService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //neu kiem tra thay co ID thi lay thong tin cu de load len
    this.route.params.subscribe((params)=> {
      if(params['id'])
      {
        this.isNew = false;
        this.viecService.get(params['id']).subscribe((res:any) =>
        {
          console.log(res.data);
          // if(res.status == 200)
          // {
            this.data = res.data;
          // }
       });
      }
    });

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

  saveData(confirm)
  {
    console.log(this.data);
    if (this.data['id']){  //update
      this.viecService.update(this.data).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    } else {  //create
      this.viecService.create(this.data).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    }
      
    this.router.navigate(['/admin/viec']);
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
