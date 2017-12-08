import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero:Hero;
  constructor() { }
  ngOnInit() {
  }
  onSelect(hero:Hero):void{
    var Doc = document.getElementById("inputBx");
    /*if(Doc.style.display === "none"){
      */this.selectedHero = hero;
    /*  Doc.style.display = "block";
    }
    else{
      Doc.style.display = "none";
    }*/
  }
}
