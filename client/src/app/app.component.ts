import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Hello word';

  ngAfterViewInit() {
  	// console.log("Bui Cong Thanh - ngAfterViewInit");
  	// require('../assets/frontend/js/jquery-2.2.4.min.js');
  	// require('../assets/frontend/js/bootstrap.min.js');
  	// require('../assets/frontend/js/owl.carousel.js');
  	// require('../assets/frontend/js/classie.js');
  	// $.getScript('../assets/frontend/js/script.js');
    // require('../assets/frontend/js/script.js');
  }

}
