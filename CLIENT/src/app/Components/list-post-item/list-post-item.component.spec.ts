import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostItemComponent } from './list-post-item.component';

describe('ListPostItemComponent', () => {
  let component: ListPostItemComponent;
  let fixture: ComponentFixture<ListPostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
