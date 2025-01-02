import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje: string="Estamos en el segundo dia del 2025"
  constructor(private titleService: Title) {
    this.titleService.setTitle("Prueba de git");
  }
  
  cambiarMensaje() {
    this.mensaje = '¡Gracias por hacer clic!';
  }
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo : string = "Pagina de prueba en git"
  mensaje: string="Estamos en el segundo dia del 2025"
  cambiarMensaje() {
    this.mensaje = '¡Gracias por hacer clic!';
  }
}
