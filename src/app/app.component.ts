import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Interaction between components using Service as observables';
  constructor(private _interservice:InteractionService){}

  
  greetStudent() {
      this._interservice.sendMessage('Good Morning');
    }
      appreciateStudent(){
    this._interservice.sendMessage('Well Done');
   }   

  }

