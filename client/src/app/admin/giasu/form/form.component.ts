import { Component, OnInit } from '@angular/core';
import { GiasuService } from '../giasu.service';
import { ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private isNew = true;  //Cho biet la Add New hay Edit
  private data = {user: ''}; 
  listActive = { 1 : "Active", 0 : "Deactive"};
  
  constructor( 
  	private giasuService: GiasuService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //neu kiem tra thay co ID thi lay thong tin cu de load len
    this.route.params.subscribe((params)=> {
      if(params['id'])
      {
        this.isNew = false;
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

  saveData(confirm)
  {
    console.log(this.data);
    if (this.data['id']){  //update
      this.giasuService.update(this.data).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    } else {  //create
      this.giasuService.create(this.data).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    }
      
    this.router.navigate(['/admin/giasu-a']);
  }

}
