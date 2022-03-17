import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes:string[] = ["Batman","Spiderman","Superman", "Daredevil"]
  heroeBorrado:string = ""
  borrarHeroe():void{
    this.heroeBorrado = this.heroes.pop() || ""
  }
  
}
