import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-tela-home-carrosel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule
  ],
  templateUrl: './tela-home-carrosel.component.html',
  styleUrls: ['./tela-home-carrosel.component.css']
})
export class TelaHomeCarroselComponent implements OnInit {

  fotos: any[] = [];

  ngOnInit() {
    this.fotos = [
      { url: 'https://images.unsplash.com/photo-1697761221129-fdf528507890?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Foto 1' },
      { url: 'https://images.unsplash.com/photo-1669003152477-3b5b0a50fa98?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Foto 2' },
      { url: 'https://images.unsplash.com/photo-1707887858038-d0773c588f8b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Foto 3' },
      { url: 'https://images.adsttc.com/media/images/592c/9a2c/e58e/ce98/ac00/000b/slideshow/16063308548_98480f4e2c_k.jpg?1496095271', alt: 'Foto 4' },
      { url: 'https://images.adsttc.com/media/images/61f8/7e55/3e4b/3159/ff00/0053/slideshow/image_via_parking_industry.jpg?1643675216', alt: 'Foto 5' }
      //{ url: 'https://picsum.photos/id/1021/1000/600/', alt: 'Foto 5' }
    ];
  }
}
