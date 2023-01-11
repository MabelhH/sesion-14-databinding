import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent  {

@Output() cambiartexto:string='';

mostrar:boolean=true;
escribir:string='Es un mecanismo para asignar el valor de un atributo a un view y la escucha que reacciona antes los cambios de dicho atributo. La diferencia entre el binding one-way (la forma convencional) y el two-way es que el two-way además de permitir que la vista sea actualizada por el modelo, habilita a los eventos de la vista para que actualicen al modelo en una sola expresión.'

}




