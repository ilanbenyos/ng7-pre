import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  initUser(){
    return user
  }
  getUser(){
    return user
  }
}

const user={
  name: 'John',
  img:'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  tasks:[
    {
      id:11,
      msg:'new site for Symo.com',
      date:1560394336794,
    },{
      id:12,
      msg:'new logo for yossi',
      date:1560333062818,
    },{
      id:14,
      msg:'free business PSD Template',
      date:1500004179699,
    },
  ],
  messages:[
    {
      from:'Nina Jones',
      img:'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
      msg:'Hey there! it\'s me again:-)',
      date:1560991219206,
    }, {
      from:'Jones Dave',
      img:'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
      msg:'hellllow! could you bring some coffie?',
      date:1560997719206,
    }, {
      from:'Dave solomon',
      img:'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
      msg:'good mornin! you are fired!!',
      date:1560330665151,
    },{
      from:'Noam turbo',
      img:'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
      msg:'when will you be here?',
      date:1560330690151,
    },
  ],
  activities:[
      {
        from:'Nina Jones',
        img:'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
        msg:'free ui kit',
        action:'commented project',
        date:1560995419206,
      },{
        from:'Noam turbo',
        img:'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
        msg:'added new project',
        action:'free psd (...)',
        date:1560991975206,
      },{
        from:'Jones Dave',
        img:'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
        msg:'uploaded vids & pics',
        action:'ended today!',
        date:1560330611151,
      },{
        from:'Jones Dave',
        img:'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
        msg:'started a new position',
        action:'at wix.com',
        date:1560330690151,
      },
    ]
}
