import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinstComponent } from './addinst.component';

describe('AddinstComponent', () => {
  let component: AddinstComponent;
  let fixture: ComponentFixture<AddinstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
