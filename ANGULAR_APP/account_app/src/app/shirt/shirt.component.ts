import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShirtPipe } from '../shirt.pipe';

@Component({
  selector: 'app-shirt',
  standalone: true,
  imports: [FormsModule,ShirtPipe],
  templateUrl: './shirt.component.html',
  styleUrl: './shirt.component.css'
})
export class ShirtComponent {
  size: number = 0
}
