import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  // get personajes(): Personaje[]
  // {
  //   return this.DbzService.personajes;
  // }
 
  nuevo:Personaje = {
    nombre: 'maestro roshi', 
    poder: 0
  }


  constructor(){
  }

}
