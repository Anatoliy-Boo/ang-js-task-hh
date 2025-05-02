import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestingPlaceComponent } from './resting-place.component';

describe('RestingPlaceComponent', () => {
  let component: RestingPlaceComponent;
  let fixture: ComponentFixture<RestingPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestingPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestingPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
