import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet, CommonModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  password = '';
  

  isFormSubmitted: boolean = false;

  form={
    email: '',
    password: ''
  }

  constructor(private http: HttpClient, private router: Router){
    
  }

  onSubmit(): void{
    this.isFormSubmitted = true;

  
    this.http.get<any>("http://localhost:3000/users").subscribe(response => {
      const user = response.find((a:any)=>{
        return a.email === this.form.email && a.password === this.form.password
      });
      if(user){
        alert('Login success!!')
        this.form = { email: '', password: '' };
        this.router.navigate(['welcome'])
      }else{
        alert("User not found")
      }
    },error => {
      alert("Something went wrong!!")
    })
    
  }
}
