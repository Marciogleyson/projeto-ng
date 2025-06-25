import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHomeCarroselComponent } from './tela-home-carrosel.component';

describe('TelaHomeCarroselComponent', () => {
  let component: TelaHomeCarroselComponent;
  let fixture: ComponentFixture<TelaHomeCarroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaHomeCarroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHomeCarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
