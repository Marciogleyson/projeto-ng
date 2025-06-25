import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar, MenubarModule } from 'primeng/menubar';

import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple, RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-home-navbar',
  standalone: true,
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, ButtonModule],
  templateUrl: './tela-home-navbar.component.html',
  styleUrl: './tela-home-navbar.component.css'
})
export class TelaHomeNavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Tela Consulta Veiculo',
        icon: 'pi pi-search',
        badge: '4',
        items: [
          {
            label: 'Placa Veiculo',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            separator: true,
          },
          {
            label: 'Mensalista ou Diarista',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            separator: true,
          },
          {
            label: 'Tempo de Permanência',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'Entrada Data e Hora',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],

      },
      {
        label: 'Relatórios',
        icon: 'pi pi-search',
        badge: '4',
        items: [
          {
            label: 'Relatório Por Data',
            icon: 'pi pi-file',
            shortcut: '⌘+S',

          },
          {
            label: 'Relatório de Veiculos Entrada e Saída',
            icon: 'pi pi-file',
            shortcut: '⌘+B',
          },
         {
            label: 'Faturamento Diário - Semanal - Mensal',
            icon: 'pi pi-file',
            shortcut: '⌘+S',

          },
          {
            label: 'Ocupaçào das Vagas',
            icon: 'pi pi-file',
            shortcut: '⌘+B',
          },
           {
            label: 'Exporta ou Imprimir',
            icon: 'pi pi-file',
            shortcut: '⌘+B',
          },
        ]
      },
    ];
  }

}

