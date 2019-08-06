import { Component, OnInit } from '@angular/core';
import { LopService } from '../lop.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lops = [];
  
  constructor(private lopService: LopService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.lopService.getAlls().subscribe(
      res => {
        this.lops = res.data;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
