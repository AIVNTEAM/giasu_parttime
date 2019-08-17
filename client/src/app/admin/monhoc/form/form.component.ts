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
  private selectedFile: File

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

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  saveData(confirm)
  {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('data', JSON.stringify(this.data));
    console.log("FORM DATA: " + formData);
    if (!this.isNew){  //update
      console.log("update monhoc: " + this.data);
      // this.monhocService.update(this.data).subscribe(
      this.monhocService.update(formData).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    } else {  //create
      console.log("addnew monhoc: " + this.data);
      // this.monhocService.create(this.data).subscribe(
      this.monhocService.create(formData).subscribe(
        res => {
          console.log(res)       
        },
        error => console.log(error)
      );
    }
      
    this.router.navigate(['/admin/monhoc']);
  }

}
