import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHomeNavbarComponent } from './tela-home-navbar.component';

describe('TelaHomeNavbarComponent', () => {
  let component: TelaHomeNavbarComponent;
  let fixture: ComponentFixture<TelaHomeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaHomeNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHomeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
