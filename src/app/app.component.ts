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
  mensaje: string="Ojala tengas un año genial en este 2025"
  constructor(private titleService: Title) {
    this.titleService.setTitle("Prueba de git");
  }
  
  cambiarMensaje() {
    this.mensaje = '¡Gracias por hacer clic vamos con gitHub!';
  }
}


