import {Component, OnInit} from '@angular/core';
import {config} from "../config";

@Component({
  selector: 'admin-flash',
  templateUrl: 'flash.component.html'
})
export class FlashComponent implements OnInit
{
  private show = false;
  private message = '';
  private type = '';

  constructor() {}

  ngOnInit()
  {
    let flash = config.get('ADMIN-FLASH');
    if(flash)
    {
      flash = JSON.parse(flash);
      this.type = flash.type;
      this.message = flash.message;
      config.del('ADMIN-FLASH');
      this.show = true;
    }
  }

}
