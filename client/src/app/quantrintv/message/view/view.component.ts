import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../shared/app.service";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [routerTransition()]
})
export class ViewComponent implements OnInit {

  private data;
  private reply = {'message_id': 0, 'content': ''}; //chua noi dung de goi len server
  private replies = []; //toan bo reply cho message nay
  private thongbao = ''; //thong bao khi them reply
  constructor(private appService: AppService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	

    this.route.params.subscribe((params)=>
    {
        this.appService.get('message/detail', {id: +params['id']}).subscribe((res:any) =>
        {
          console.log(res.data);
          // if(res.status == 200)
          // {
            this.data = res.data.data;

            this.replies = res.data.replies;
          // }
       });
      
    });
  }

  goBack(): void {
    this.location.back();
  }

  postReply(){
  	// this.reply = {
  	// 	'message_id': this.data = res.data.data.id,
  	// 	'content': 
  	// };
  	this.reply.message_id = this.data.id;
  	this.appService.post('message/reply', this.reply, []).then(res =>
    {
    	//url = '/admin/message/' + this.data.id;
    	//this.router.navigate(['/admin/message/' + this.data.id]);
    	// this.thongbao = res.data;
    	this.showFlash()
    	// this.router.navigate(['/admin/message/']);
    });
   console.log(this.reply); 

  }

    showFlash() {
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
        this.flashMessage.show('Welcome To TheRichPost.com', { cssClass: 'alert-success', timeout: 2000 });
    }
}
