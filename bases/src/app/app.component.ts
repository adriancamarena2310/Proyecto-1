import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Bases';
  public counter:number = 10;

  increseBy( value:number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }
}
