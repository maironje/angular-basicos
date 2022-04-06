import { Component, EventEmitter ,Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService){

  }
  
  //@Output() onnuevopersonaje: EventEmitter<Personaje> = new EventEmitter() ;


  agregar(  ) {
    // evento.preventDefault();
    if( this.nuevo.nombre.trim().length === 0)
    {
      return;
    }
    console.log(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo);
  }

}
