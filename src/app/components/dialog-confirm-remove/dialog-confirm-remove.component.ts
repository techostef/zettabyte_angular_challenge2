import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogDataBravo {
  warningText?: any,
  confirmText?: any,
  labelConfirm?: any,
  labelCancel?: any,
  onConfirm?: any,
}

@Component({
  selector: 'app-dialog-confirm-remove',
  templateUrl: './dialog-confirm-remove.component.html',
  styleUrls: ['./dialog-confirm-remove.component.scss']
})
export class DialogConfirmRemoveComponent implements OnInit {
  countDown = 5;
  warningText: string = "Attention"
  confirmText: string = "Are you sure want to remove this mentor from this company"
  labelConfirm: string = 'I confirm'
  labelCancel: string = 'Cancel'
  onConfirm: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogDataBravo,
    private dialogRef: MatDialogRef<DialogConfirmRemoveComponent>
  ) { }

  ngOnInit(): void {
    if (this.data.onConfirm) this.onConfirm = this.data.onConfirm
    if (this.data.warningText) this.warningText = this.data.warningText
    if (this.data.confirmText) this.confirmText = this.data.confirmText
    if (this.data.labelConfirm) this.labelConfirm = this.data.labelConfirm
    if (this.data.labelCancel) this.labelCancel = this.data.labelCancel
    const interval = setInterval(() => {
      this.countDown -= 1;
      if (this.countDown === 0) clearInterval(interval);
    }, 1000)
  }

  
  onCloseDialog(): void {
    this.dialogRef.close('Pizza!');
  }

  onConfirmRemove(): void {
    if (this.onConfirm) this.onConfirm()
    this.onCloseDialog();
  }

}
