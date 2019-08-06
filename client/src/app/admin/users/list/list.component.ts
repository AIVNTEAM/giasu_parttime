import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = [];
  
  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.userService.getAlls().subscribe(
      res => {
        this.users = res.data;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
