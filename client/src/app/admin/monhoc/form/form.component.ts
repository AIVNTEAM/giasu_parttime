import { Component, OnInit } from '@angular/core';
import { MonhocService } from '../monhoc.service';
import { ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private isNew = true;  //Cho biet la Add New hay Edit
  private data = {'id': '', 'tenmonhoc': ''}; 

  constructor( 
  	private monhocService: MonhocService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //neu kiem tra thay co ID thi lay thong tin cu de load len
    this.route.params.subscribe((params)=> {
      if(params['id'])
      {
        this.isNew = false;
        this.monhocService.get(params['id']).subscribe((res:any) =>
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
      this.monhocService.update(this.data).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    } else {  //create
      this.monhocService.create(this.data).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    }
      
    this.router.navigate(['/admin/monhoc']);
  }

}
