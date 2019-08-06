import { Component, OnInit } from '@angular/core';
import { GiasuService } from '../giasu.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private data = {user: ''};
  constructor(private giasuService: GiasuService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  	//neu kiem tra thay co ID thi lay thong tin cu de load len
    this.route.params.subscribe((params)=> {
      if(params['id'])
      {
        this.giasuService.get(params['id']).subscribe((res:any) =>
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
