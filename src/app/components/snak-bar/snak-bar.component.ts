import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snak-bar',
  templateUrl: './snak-bar.component.html',
  styleUrls: ['./snak-bar.component.scss']
})
export class SnakBarComponent {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
