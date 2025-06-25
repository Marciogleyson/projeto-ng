import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaHomeNavbarComponent } from "./components/tela-home-navbar/tela-home-navbar.component";
import { TelaHomeCarroselComponent } from "./components/tela-home-carrosel/tela-home-carrosel.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, TelaHomeNavbarComponent, TelaHomeNavbarComponent, TelaHomeCarroselComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-ng';
}
