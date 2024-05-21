import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'my-app';
  dateToday: string;
  name: string;
  constructor(){
    this.dateToday = new Date().toDateString()
    this.name ="Hubert Veyannie"
  }

  size: number = 0;
}
