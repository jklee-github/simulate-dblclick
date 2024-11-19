import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @ViewChild('proceedButton') proceedButton!: ElementRef<HTMLButtonElement>;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  // Handle the double-click event
  onProceed(reason: string) {
    console.log('Double-click detected on "Yes, Proceed" button!');

    this.dialogRef.close(reason);
  }

  // // Simulate a double-click event
  simulateDoubleClick() {
    // Create and dispatch a dblclick event
    const dblClickEvent = new MouseEvent('dblclick', {
      bubbles: true,
      cancelable: true,
    });
    this.proceedButton.nativeElement.dispatchEvent(dblClickEvent);
  }

  // Close dialog with a reason
  closeDialog(reason: string) {
    this.dialogRef.close(reason);
    this.dialogRef.close(reason);
  }
}
