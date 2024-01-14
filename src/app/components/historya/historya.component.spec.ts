import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryaComponent } from './historya.component';

describe('HistoryaComponent', () => {
  let component: HistoryaComponent;
  let fixture: ComponentFixture<HistoryaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
