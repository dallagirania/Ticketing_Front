import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTicketComponent } from './modif-ticket.component';

describe('ModifTicketComponent', () => {
  let component: ModifTicketComponent;
  let fixture: ComponentFixture<ModifTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
