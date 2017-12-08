import { Injectable } from '@angular/core';
import  {Observable} from ''
import {of} from 'rxjs/observable/of';

import {MessageService} from './message.service';
@Injectable()
export class HeroService {

  constructor() { }
  getHeroes():Observable<Hero[]>{
    //of(HEROES) will return an OBSERVABLE<Hero[]> emits a single value(array of mock heroes)
    return of(HEROES);
  }
}
