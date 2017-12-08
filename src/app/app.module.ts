import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'//ng-Model contained here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {MessageService} from './message.service';
import {HeroService} from './hero.service';
import { MessagesComponent } from './messages/messages.component';
//what files and libraries(i.e metadata) are required to run the app
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //createa single, shared instance of heroservice nd injects it into any class that requests for it
  providers: [HeroService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
