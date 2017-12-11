/**
  handle communication with backend(not good to have components directly access backend)
  Constant Model and changing View Model
**/
import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HEROES} from './mock-heroes';
//communication with dummy server
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class HeroService {
  private heroesurl = 'api/heroes';
  //inject HttpClient into constructor
  constructor(private http:HttpClient,
              private  messageService:MessageService) { }
  getHeroes():Observable<Hero[]>{
    //of(HEROES) will return an OBSERVABLE<Hero[]> emits a single value(array of mock heroes)
    //observable allows the getHeroes()method to manage asynchronous data(e.g from server/backend)
    this.messageService.add('HeroService:fetched heroes');
    //return of(HEROES);
    return this.http.get<Hero[]>(this.heroesurl);
  }
  getHero(id:number):Observable<Hero>{
    this.messageService.add(`HeroService: Fetched Hero id={id}`);
    return of(HEROES.find(hero => hero.id ===id));
    
  }
  private log(message:string):void{
    this.messageService.add('HeroService: ' + message)
  }
}
