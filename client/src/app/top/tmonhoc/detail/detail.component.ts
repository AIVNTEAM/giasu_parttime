import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/common.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data = {};
  constructor(private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  	//neu kiem tra thay co ID thi lay thong tin cu de load len
    this.route.params.subscribe((params)=> {
      if(params['id'])
      {
        // this.isNew = false;
        this.commonService.getCongviectheoLop(params['id']).subscribe((res:any) =>
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

}
