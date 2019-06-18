

import { Component, OnInit } from '@angular/core';

declare var $;
window["$"] = $;
window["jQuery"] = $;

@Component({
  selector: 'top-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  	$(document).ready(function() {
	   	$('.menu-btn').on('click',function(e){
			//e.stopPropagation();		
			if($(this).hasClass('active'))
			{
				$('.menu-rs').animate({right: '-250px'},500);
			}
			else
			{
				$('.menu-rs').animate({right: '0px'},500);
			}
		});	

		$('.r-mv').on('click',function(){
			$('.menu-rs').animate({right: '-250px'},500);
		});
    });  	
  }
  	
}
