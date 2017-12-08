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
    var txtField = document.getElementById("inputBx");
    if(txtField.style.display === "none"){
      txtField.style.display = "block";
      confirm("doing Something");
    }
    else {
      txtField.style.display = "none";
    }
    //this.toggle();
    //this.selectedHero = hero;

  }
  toggle():void{
    var txtField = document.getElementById("inputBx");
    if(txtField.style.display === "none"){
      txtField.style.display = "block";
      confirm("doing Something");
    }
    else {
      txtField.style.display = "none";
    }
  }
}
