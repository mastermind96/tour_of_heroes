import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {Hero} from '../hero';
import {HeroService} from '../hero.service'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;
  //activatedResource contains info abt the route to this instance of hero-detail.component
  //HeroService gets hero data from the remote server and this component will use it to get the hero-to-display
  //The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
  constructor(
    private route: ActivatedRoute,
    private heroService:HeroService,
    private Location:Location
  ) { }
  ngOnInit() {
    this.getHero();
  }


  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');
    //wtf
    this.heroService.getHero(id).subscribe(hero => this.hero=hero);
  }

  goBack():void{
    this.Location.back();
  }
}
