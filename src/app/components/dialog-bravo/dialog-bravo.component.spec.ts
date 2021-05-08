import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBravoComponent } from './dialog-bravo.component';

describe('DialogBravoComponent', () => {
  let component: DialogBravoComponent;
  let fixture: ComponentFixture<DialogBravoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBravoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBravoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
