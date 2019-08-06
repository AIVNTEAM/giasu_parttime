import { Component, OnInit } from '@angular/core';
import { GiasuService } from '../giasu.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  giasus = [];
  
  constructor(private giasuService: GiasuService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.giasuService.getAlls().subscribe(
      res => {
        this.giasus = res.data;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
