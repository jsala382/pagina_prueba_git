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
  mensaje: string="Hola Bienvenido al primer dia del 2025"
  cambiarMensaje() {
    this.mensaje = '¡Gracias por hacer clic!';
  }
}
