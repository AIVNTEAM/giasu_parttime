import { Component, OnInit } from '@angular/core';
import { MonhocService } from '../monhoc.service';
import { ActivatedRoute, Router} from "@angular/router";
import { constant } from '../../../shared/constant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  path = constant.BASE_URL;
  monhocs = [];
  
  constructor(private monhocService: MonhocService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.monhocService.getAlls().subscribe(
      res => {
        this.monhocs = res.data;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
