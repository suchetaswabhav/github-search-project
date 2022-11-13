import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSearchComponent } from './past-search.component';

describe('PastSearchComponent', () => {
  let component: PastSearchComponent;
  let fixture: ComponentFixture<PastSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
