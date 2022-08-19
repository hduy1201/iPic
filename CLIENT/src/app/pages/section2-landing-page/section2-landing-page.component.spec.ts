import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2LandingPageComponent } from './section2-landing-page.component';

describe('Section2LandingPageComponent', () => {
  let component: Section2LandingPageComponent;
  let fixture: ComponentFixture<Section2LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2LandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
