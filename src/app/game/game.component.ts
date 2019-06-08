import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import popup from '../popups.service';
import _ from 'lodash';
import axios from 'axios';


interface WordOpt {
  he: string;
  en: string;
}
interface ApiRes {
  data: {
    hits: Array<{
      largeImageURL: string
    }>;
  };
}

@Component({
  selector: 'app-game',
  template: `
    <div class="page game d-flex align-items-center flex-column">
      <div class="panel w-100 d-flex justify-content-between mb-3">
        <div class="form-group col-md-4">
          <select class="lang-select form-control" (change)="changeLang($event)">
            <option *ngFor="let item of langs" value="{{item.val}}">{{item.name}}</option>
          </select>
      </div>

        <div class="score h4 d-flex row">
          <span  class="bg-success border rounded p-2">{{score}}</span>
          <span class="d-flex align-items-center ml-2"> :ניקוד </span>
        </div>

      </div>
      <img *ngIf="image" [src]="image">
      <div class="panel justify-content-center"
           *ngIf="possibleAnswers.length>0">
        <button type="button"
                class="btn btn-primary h2 m-2"
                *ngFor="let answer of possibleAnswers"
                (click)="clicked(answer)">
          {{ answer[lang] }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  possibleAnswers: Array<object>;
  selectedWord: WordOpt;
  lang: string;
  image: string;
  pairs: WordOpt[];
  score: number;
  langs: any[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.possibleAnswers = [];
    this.lang = 'he';
    this.langs = [
      {name: 'עברית' , val: 'he'},
      {name: 'english', val: 'en'}
    ];
    this.image = '';
    this.score = this.data.getScore();
    this.pairs = [
      {he: 'כלב', en: 'dog'},
      {he: 'חתול', en: 'cat'},
      {he: 'כסא', en: 'chair'},
      {he: 'שולחן', en: 'table'},
      {he: 'בית', en: 'house'},
      {he: 'ילד', en: 'kid'},
      {he: 'ילדה', en: 'girl'},
      {he: 'סבא', en: 'grandfather'},
      {he: 'ציפור', en: 'bird'},
      {he: 'סוס', en: 'horse'},
      {he: 'פרה', en: 'cow'},
      {he: 'נחש', en: 'snake'},
      {he: 'גדר', en: 'fence'},
      {he: 'מטוס', en: 'airplane'},
      {he: 'אוניה', en: 'boat'},
      {he: 'טרקטור', en: 'tractor'},
      {he: 'אוטו', en: 'vehicle'},
      {he: 'כביש', en: 'road'}

    ];
    this.newQuestion();
  }
  changeLang(e) {
    this.lang = e.target.value;
  }

  clicked(answer: WordOpt) {
    let title = 'כל הכבוד!';
    let addScore = 2;



    if (answer.en === this.selectedWord.en) {
      popup.$toast.success(title);
    } else {
      const wrongAnswer = this.pairs.find(i => i.en === answer.en);
      title = `באסה... ${this.selectedWord.en } = ${this.selectedWord.he}`;
      const text = `${wrongAnswer.en} = ${wrongAnswer.he}`;
      addScore = -1;
      popup.$notify.error(title, text);

    }
    this.score = this.data.addScore(addScore);

    this.newQuestion();
  }
  async newQuestion() {
    const idx = Math.floor(Math.random() * this.pairs.length);
    const selectedWord = this.pairs[idx];
    this.selectedWord = this.pairs[idx];
    this.getImages(selectedWord.en);
    this.possibleAnswers = this.getPossibleAnswers(idx);
  }
  getPossibleAnswers(idx: number) {
    const cloned = _.cloneDeep(this.pairs);
    const rigthAnswer = cloned.splice(idx, 1)[0];
    const res = [];
    for (let i = 1; i < 4; i++) {
      const randIdx = Math.floor(Math.random() * cloned.length);
      res.push(cloned[randIdx]);
      cloned.splice(randIdx, 1);
    }
    const idx2 = Math.floor(Math.random() * cloned.length);

    res.splice(idx2, 0, rigthAnswer);
    return res;
  }

  async getImages(word: string) {
    const key = `12694562-f15cb07609de14d31896535ec`;
    const str = `https://pixabay.com/api/?key=${key}&q=${word}&image_type=photo&pretty=true`;

    const res = await axios.get(str) as ApiRes;
    const hits = res.data.hits;
    const idx = Math.floor(Math.random() * hits.length);
    const image =  hits[idx].largeImageURL;
    this.image = image;
  }
}
