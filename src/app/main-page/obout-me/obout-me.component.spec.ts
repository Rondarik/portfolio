import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OboutMeComponent } from './obout-me.component';

describe('OboutMeComponent', () => {
  let component: OboutMeComponent;
  let fixture: ComponentFixture<OboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
