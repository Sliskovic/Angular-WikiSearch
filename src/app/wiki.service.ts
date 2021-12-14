import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http:  HttpClient) { }
  baseUrl: string = "https://en.wikipedia.org/w/api.php";
  
  search(term: string){
    // return the real wiki api from search metod 'hello i am wiki'
    return this.http.get(this.baseUrl, {
      params: {
        action: 'query', 
        list: 'search',
        srsearch: term,
        utf8: '1',
        format: 'json',
        origin: '*'
      }
    })
    //comunicate data from parent to child
  }
}

