import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  constructor(private messageService:MessageService) { }
  getHeroes():Observable<Hero[]>{
    //of(HEROES) will return an OBSERVABLE<Hero[]> emits a single value(array of mock heroes)
    this.messageService.add('HeroService:fetched heroes');
    return of(HEROES);
  }
}
