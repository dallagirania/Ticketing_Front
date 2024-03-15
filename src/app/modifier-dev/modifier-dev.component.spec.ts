import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDevComponent } from './modifier-dev.component';

describe('ModifierDevComponent', () => {
  let component: ModifierDevComponent;
  let fixture: ComponentFixture<ModifierDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
