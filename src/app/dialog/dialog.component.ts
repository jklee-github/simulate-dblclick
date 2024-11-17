import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @ViewChild('proceedButton', { static: true }) proceedButton!: ElementRef;

  // Handle the double-click event
  onProceed() {
    console.log('Double-click detected on "Yes, Proceed" button!');
  }

  // Simulate a double-click event
  simulateDoubleClick() {
    const dblClickEvent = new MouseEvent('dblclick', {
      bubbles: true,
      cancelable: true,
    });
    this.proceedButton.nativeElement.dispatchEvent(dblClickEvent);
  }
}
