import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] =  ['goku','gojan','crilin','capian america'];
  HeroeBorrado: string = '';

    borrarheroe(){
     this.HeroeBorrado =   this.heroes.shift() || '';
     
    }
}
