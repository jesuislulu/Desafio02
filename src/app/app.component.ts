import { Component } from '@angular/core';
import { Alumnos } from './models/alumnos.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
//"Lucia", 'Roma', 'Marta', 'Maria', 'Antonio'

  public alumnos: Alumnos[] = [
    new Alumnos (1, 37, 'Lucia', 'Rocha', 'Arquitectura' ),
    new Alumnos (2, 37, 'Roma', 'Martinelli', 'Arquitectura' ),
    new Alumnos (3, 37, 'Maria', 'Callas', 'Arquitectura' ),
    new Alumnos (4, 37, 'Antonio', 'Banderas', 'Arquitectura' )
  
  ];

}
