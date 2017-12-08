import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  //initialize empty string array
  message:string[] = [];
  //populate
  add(message:string){
    this.message.push(message);
  }
  //empty array
  clear(){
    this.message = [];
  }
}
