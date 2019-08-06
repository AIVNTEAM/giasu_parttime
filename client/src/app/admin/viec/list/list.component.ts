import { Component, OnInit } from '@angular/core';
import { constant } from "../../../shared/constant";
import { config } from "../../../shared/config";
import { ViecService } from '../viec.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private listActive = constant.Active;
  viecs = [];

  constructor(private viecService:ViecService,
  	private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.viecService.getAlls().subscribe(
      res => {
        this.viecs = res.data;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
