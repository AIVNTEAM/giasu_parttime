import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {config} from "../config";

@Component({
    selector: 'sa-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

    //2 param cua the <sa-paginator>
    //co dang <sa-paginator data="data" url="xyz"></sa-paginator>
    @Input() public data:any;
    @Input() public url:string;
    public show:number=7;
    private lang;

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    	this.lang = config.get('LANG','us');
    }

    changeUrl(page) {
        this.router.navigateByUrl(this.url+';page='+page);
    }

    generateStartPage(page:number=0) {

        this.show = 7;
        // var currentPage = page>0?page:this.data.current_page;
        var currentPage = page>0?page:1;
        var startPage = 1;
        var halfShow = Math.floor(this.show/2);
        if (this.show > this.data.last_page) {
            this.show = this.data.last_page;
        }
        if (currentPage > halfShow) {
            if (currentPage > this.data.last_page-halfShow) {
                startPage = this.data.last_page-this.show+1;
            } else {
                startPage = currentPage-halfShow;
            }
            

        }
        if (startPage <= 0) {
            startPage = 1;
        }
        // console.log("Startpage: " + startPage);
        // console.log("currentPage: " + currentPage);
        return startPage
    }

    generatePages(currentPage, lastPage) {
        var startPage = this.generateStartPage(currentPage);
        var result = [];
        
        for (var index = 0; index < this.show; index++) {
            var page = startPage+index;
            if (page <= lastPage) {
                result.push(page);
            }
        }
        // console.log('result');
        // console.log(result);
        return result;

    }

}
