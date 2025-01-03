import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje: string="Gracias por participar feliz año 2025 y espero que se cumplan tus deseos"
  constructor(private titleService: Title) {
    this.titleService.setTitle("Prueba de git");
  }
  
  cambiarMensaje() {
    this.mensaje = '¡Gracias por hacer clic vamos con gitHub!';
  }
}


