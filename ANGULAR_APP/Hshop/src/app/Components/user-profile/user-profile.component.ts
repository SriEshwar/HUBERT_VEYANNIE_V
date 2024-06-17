import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{

  currentUser: any;

  constructor(private authService: AuthService, private http: HttpClient){}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser && this.currentUser.id) {
      this.http.get(`http://localhost:3000/users/${this.currentUser.id}`).subscribe(
        (user: any) => {
          this.currentUser = user;
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    }
  }

}
