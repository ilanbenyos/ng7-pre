import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getImages(word){
    const key = `12694562-f15cb07609de14d31896535ec`;
    const str = `https://pixabay.com/api/?key=${key}&q=${word}&image_type=photo&pretty=true`;
    return this.http.get(str);
  }
  addScore(addScore: number){
    const score = addScore + this.getScore()
    this.setScore(score);

    return score;
  }
  getScore(){
    return  +window.localStorage.getItem('score')
  }
  initScore(){
    let score = this.getScore()
    if(typeof Number(score) !== 'number') {
      score = 0;
    }
    if(!score){
      this.setScore(0);
    }
  }
  setScore(setScore: number){
    window.localStorage.setItem('score', '' + setScore );
  }
}
