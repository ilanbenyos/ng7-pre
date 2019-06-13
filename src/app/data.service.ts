import { Injectable } from '@angular/core';
import {User} from './models/tutorial.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUser(){
    return user
  }
}

const user:User={
  name: 'John',
  img:'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  tasks:[
    {
      id:11,
      msg:'new site for Symo.com',
      date:1561421893757,
    },{
      id:12,
      msg:'new logo for yossi',
      date:1560333062818,
    },{
      id:14,
      msg:'free business PSD Template',
      date:1555004179699,
    },
  ],
  messages:[
    {
      from:'Nina Jones',
      img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg',
      msg:'Hey there! it\'s me again:-)',
      date:1560991219206,
    }, {
      from:'Jones Dave',
      img:'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
      msg:'hellllow! could you bring some coffie?',
      date:1560997719206,
    }, {
      from:'Dave solomon',
      img:'https://i.kinja-img.com/gawker-media/image/upload/s--rc0zysTU--/c_scale,f_auto,fl_progressive,q_80,w_800/xq47qve5n1mlmpvqlxca.jpg',
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
        img:'https://uploads.guim.co.uk/2017/10/06/Arwa_Mahdawi,_L.png',
        msg:'free ui kit',
        action:'commented project',
        date:1560508151493,
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
        img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg',
        msg:'started a new position',
        action:'at wix.com',
        date:1560330690151,
      },
    ]
}
