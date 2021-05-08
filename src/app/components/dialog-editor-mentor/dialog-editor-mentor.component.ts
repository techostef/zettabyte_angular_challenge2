import { generateId } from './../../helper/data.helper';
import { DialogBravoComponent, DialogDataBravo } from './../dialog-bravo/dialog-bravo.component';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MentorService } from 'src/app/services/mentor.service';
import IMentor from 'src/app/mentor.interface';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-editor-mentor',
  templateUrl: './dialog-editor-mentor.component.html',
  styleUrls: ['./dialog-editor-mentor.component.scss']
})
export class DialogEditorMentorComponent implements OnInit {
  entityOptions: any[] = [
    'Company'
  ]
  value: IMentor = {
    _id: '0',
    email: '',
    civility: '',
    first_name: '',
    last_name: '',
    company: {
      name: '',
      user_type: 'Mentor',
    },
    count_document: '15',
    user_status: 'pending',
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  isAvailable: boolean = false;

  matcher = new MyErrorStateMatcher();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogDataBravo, 
    private dialogRef: MatDialogRef<DialogEditorMentorComponent>,
    public dialog: MatDialog,
    private mentorService: MentorService,
  ) {}

  ngOnInit(): void {
    if (this.data.item) {
      this.matcher = null;
      this.emailFormControl = new FormControl(this.data.item?.email);
      this.value = {...this.data.item}
      this.isAvailable = true;
    }
  }

  onCloseDialog(): void {
    this.dialogRef.close('Pizza!');
  }

  onKeyUpEmail(value): void {
    this.value.email = value;
  }

  onOpenBravo(): void {
    this.dialog.open(DialogBravoComponent, {
      data: {
        animal: 'panda',
        successText: 'Bravo',
        infoDetail: 'Email is available'
      }
    });
  }
  checkEmailAvailable(): void {
    this.isAvailable = this.mentorService.checkIsEmailAvailable(this.value.email);
    if (this.isAvailable) {
      this.onOpenBravo()
      this.value.company.name = 'Company'
    } else {
      alert('Email is already Exist')
    }
  }
  keyUpFirstName(value: string): void {
    this.value.first_name = value    
  }
  keyUpLastName(value: string): void {
    this.value.last_name = value    
  }
  saveItem(): void {
    if (this.value._id === '0') {
      this.value._id = generateId()
      const infoDetail = `The ${this.value.civility} ${this.value.first_name} is recorded`
      this.mentorService.addItemMentor(this.value);
      this.dialog.open(DialogBravoComponent, {
        data: {
          animal: 'panda',
          successText: 'Success',
          infoDetail: infoDetail,
          onClick: () => this.onCloseDialog()
        }
      });
    } else {
      const infoDetail = `The ${this.value.civility} ${this.value.first_name} is updated`
      this.mentorService.updateItemMentor(this.value);
      this.dialog.open(DialogBravoComponent, {
        data: {
          animal: 'panda',
          successText: 'Success',
          infoDetail: infoDetail,
          onClick: () => this.onCloseDialog()
        }
      });
    }
  }
}
