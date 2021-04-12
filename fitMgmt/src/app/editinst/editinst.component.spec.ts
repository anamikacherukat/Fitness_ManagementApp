import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinstComponent } from './editinst.component';

describe('EditinstComponent', () => {
  let component: EditinstComponent;
  let fixture: ComponentFixture<EditinstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
