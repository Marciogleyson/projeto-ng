import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-footer',
  imports: [Menubar, PanelModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   footerMenu = [
    { label: 'Termos de Serviço', icon: 'pi pi-file', command: () => window.open('/termos', '_blank') },
    { label: 'Privacidade', icon: 'pi pi-lock', command: () => window.open('/privacidade', '_blank') },
    { label: 'Contato', icon: 'pi pi-phone', command: () => window.open('/contato', '_blank') }
  ];
  
}

