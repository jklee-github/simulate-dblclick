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
  simulateCount = 0; // Count for 'Simulate dblclick'

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(reason => {
      console.log('afterclose');

      // Update counts based on the reason received
      if (reason === 'proceed') {
        this.proceedCount++;
      } else if (reason === 'simulate') {
        this.simulateCount++;
      }
    });
  }

  resetCounts() {
    this.proceedCount = 0;
    this.simulateCount = 0;
  }
}
