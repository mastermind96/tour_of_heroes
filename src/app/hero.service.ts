/**
  handle communication with backend(not good to have components directly access backend)
  Constant Model and changing View Model
**/

import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError,map,tap} from 'rxjs/operators';
import {HEROES} from './mock-heroes';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Hero} from './hero';
import {MessageService} from './message.service';

//communication with dummy server
@Injectable()
export class HeroService {

  private heroesurl = 'api/heroes';

  //inject HttpClient into constructor
  constructor(private http:HttpClient,
              private  messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    //of(HEROES) will return an OBSERVABLE<Hero[]> emits a single value(array of mock heroes)
    //observable allows the getHeroes()method to manage asynchronous data(e.g from server/backend)
    const url2 = `{$this.heroesurl}/{3}`;
    this.messageService.add('HeroService:fetched heroes');
    return this.http.get<Hero[]>(url2);
    //return of(HEROES);
    //const go_to_url = `${this.heroesurl}`;
  }
  getHero(id:number):Observable<Hero>{
    const url = `{$this.heroesurl}/${id}`;
    this.messageService.add(`HeroService: Fetched Hero id={id}`);
    //return of(HEROES.find(hero => hero.id ===id));
    return this.http.get<Hero>(url);
  }
  private log(message:string):void{
    this.messageService.add('HeroService: ' + message);
  }
}
