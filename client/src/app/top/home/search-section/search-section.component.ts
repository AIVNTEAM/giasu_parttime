import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from "../../../shared/app.service";
import {constant} from "../../../shared/constant";

@Component({
  selector: 'search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {

  private data = {'key_word': '', 'huyen_id': '', 'hinhthuc_id': '', 'caphoc_id': '', 'monhoc_id': ''};

  private dsmh;
  private dsch;
  private dskv;
  private dsht = [{"id": 1, "hinhthuc": "Hoc tai nha"},
  {"id": 2, "hinhthuc": "Hoc truc tuyen"}];

  constructor(private router: Router,
        private route: ActivatedRoute,
        private appService: AppService) { }

  ngOnInit() {
    this.laydsmh();
    this.laydsch();
    this.laydskv();
  }

  searchCongviec(){
  	if(this.checkSpecialChar(this.data['key_word']) == true && this.data['key_word'] != ''){
            alert("Từ khóa không được chứa các kí tự đặc biệt");
        }  else {
            var params = constant.SearchParams;
            params = this.appService.resetParams(params);
            params.key_word = this.data['key_word'];
            params.huyen_id = this.data['huyen_id'];
            params.hinhthuc_id = this.data['hinhthuc_id'];
            params.caphoc_id = this.data['caphoc_id'];
            params.monhoc_id = this.data['monhoc_id'];
            // if(this.appService.checkParamsExist(params))
            // {
            //     params.tour_time_start = this.appService.getStartMonthSeason();
            // }
            // console.log(params);
            //tu ds tham so params chuyen thanh URL
            var url = this.appService.genarateUrl(params);
            console.log(url);
            url = decodeURI(url);

            //co URL thi chuyen qua component search
            this.router.navigate(['/search'+url]);
        }
  }

  checkSpecialChar(string){
        let specialChars = "<>@!#$%^&*()_[]{}?:;|'\"\\,./~`-="
        for(var i = 0; i < specialChars.length;i++){
            if(string.indexOf(specialChars[i]) > -1){
                return true
            }
        }
        return false;
    }

  laydsmh(){
    this.appService.get('monhoc').subscribe((res:any) => {
      // console.log(res.data);
      // if (res.status == 200){
      this.dsmh = res.data;
        // console.log(this.dsmh);
      // }
    })
  }

  laydsch(){
    this.appService.get('caphoc').subscribe((res:any) => {
      // if (res.status == 200){
        this.dsch = res.data;
      // }
    })
  }

  laydskv(){
    this.appService.get('khuvuc').subscribe((res:any) => {
      // if (res.status == 200){
        this.dskv = res.data;
      // }
    })
  }

}
