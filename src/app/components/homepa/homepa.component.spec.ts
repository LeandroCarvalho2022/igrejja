import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepaComponent } from './homepa.component';

describe('HomepaComponent', () => {
  let component: HomepaComponent;
  let fixture: ComponentFixture<HomepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
