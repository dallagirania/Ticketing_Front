import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllModifComponent } from './all-modif.component';

describe('AllModifComponent', () => {
  let component: AllModifComponent;
  let fixture: ComponentFixture<AllModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
