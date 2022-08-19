import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3LandingPageComponent } from './section3-landing-page.component';

describe('Section3LandingPageComponent', () => {
  let component: Section3LandingPageComponent;
  let fixture: ComponentFixture<Section3LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3LandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
