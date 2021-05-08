import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogDataBravo {
  animal: 'panda' | 'unicorn' | 'lion';
  successText?: string,
  infoDetail?: string,
  onClick?: Function,
  item?: any,
}

@Component({
  selector: 'app-dialog-bravo',
  templateUrl: './dialog-bravo.component.html',
  styleUrls: ['./dialog-bravo.component.scss']
})
export class DialogBravoComponent implements OnInit {
  successText: string = "Bravo"
  infoDetail: string = "Email is available"

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogDataBravo, 
    private dialogRef: MatDialogRef<DialogBravoComponent>
  ) {}

  ngOnInit(): void {
    this.successText = this.data?.successText ?? 'Bravo';
    this.infoDetail = this.data?.infoDetail ?? 'Email is available';
  }

  onCloseDialog(): void {
    this.dialogRef.close('Pizza!');
    if (this.data?.onClick) this.data.onClick()
  }

}
