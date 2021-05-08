import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditorMentorComponent } from './dialog-editor-mentor.component';

describe('DialogEditorMentorComponent', () => {
  let component: DialogEditorMentorComponent;
  let fixture: ComponentFixture<DialogEditorMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditorMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditorMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
