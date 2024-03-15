import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevelopperComponent } from './add-developper.component';

describe('AddDevelopperComponent', () => {
  let component: AddDevelopperComponent;
  let fixture: ComponentFixture<AddDevelopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevelopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDevelopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
