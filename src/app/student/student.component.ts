import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{

  constructor(private _interservice:InteractionService){}
 ngOnInit(): void {
   this._interservice.teacherMessage$.subscribe(
    message =>{
      if(message ==='Good Morning')
        alert('Good Morning Teacher');
      else if (message==='Well Done')
        alert('Thank you Teacher');
    }

   );
 }
}
