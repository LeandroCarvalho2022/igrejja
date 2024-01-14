import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSavedComponent } from './cards-saved.component';

describe('CardsSavedComponent', () => {
  let component: CardsSavedComponent;
  let fixture: ComponentFixture<CardsSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSavedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
