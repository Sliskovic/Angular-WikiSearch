import { Component, EventEmitter, Output } from '@angular/core';
import { WikiService } from './wiki.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikisearch';
  pages = [];


  constructor(private wiki: WikiService){}

  onTerm(term: string){
    this.wiki.search(term).subscribe((res: any)=>{
    // console.log(res);
      this.pages = res.query.search;
      console.log(this.pages);
    })
    // console.log(term);
    // const results = this.wiki.search(term);
    // console.log(results);
    
  }
}
