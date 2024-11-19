import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simulate-dblclick';
  proceedCount = 0; // Count for 'Yes, Proceed'
  editCount = 0; // Count for 'Simulate dblclick'

  // Edit button
  private lastClickTime = 0;
  private clickTimeout: any;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(reason => {
      // Update counts based on the reason received
      if (reason === 'proceed') {
        this.proceedCount++;
      }
    });
  }

  onEdit(): void {
    const currentTime = new Date().getTime();
    const timeSinceLastClick = currentTime - this.lastClickTime;

    if (timeSinceLastClick < 300) {
      // Clear the timeout for single click
      clearTimeout(this.clickTimeout);

      // Emit the double-click event
      console.log('Double-click detected on Edit button');
    } else {
      // Set timeout for single click logic, if needed
      this.clickTimeout = setTimeout(() => {
        this.editCount++;
        console.log('Single-click detected on Edit button');
      }, 300);
    }

    this.lastClickTime = currentTime;
  }

  resetCounts() {
    this.proceedCount = 0;
    this.editCount = 0;
  }
}
