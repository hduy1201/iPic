import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1LandingPageComponent } from './section1-landing-page.component';

describe('Section1LandingPageComponent', () => {
  let component: Section1LandingPageComponent;
  let fixture: ComponentFixture<Section1LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1LandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section1LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
