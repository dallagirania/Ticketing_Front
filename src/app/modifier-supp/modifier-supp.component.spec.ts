import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSuppComponent } from './modifier-supp.component';

describe('ModifierSuppComponent', () => {
  let component: ModifierSuppComponent;
  let fixture: ComponentFixture<ModifierSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSuppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
