import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  fullName: string | null = null;

  bmiForm: FormGroup;
  bmi: number | null = null
  bmiMessage: string = ''

  constructor(private authService: AuthService, private fb: FormBuilder){
    this.bmiForm = this.fb.group({
      height: ["", [Validators.required, Validators.min(1)]],
      weight: ["",[Validators.required, Validators.min(1)]]
    })
  }
  
  ngOnInit(): void {
    this.fullName = this.authService.getFullname();
  }

  calculateBMI(): void{
    if(this.bmiForm.invalid){
      return
    }

    const height = this.bmiForm.get('height')?.value / 100
    const weight = this.bmiForm.get('weight')?.value

    this.bmi = weight / (height*height)

    this.bmiMessage = this.getBMIMessage(this.bmi)
  }

  getBMIMessage(bmi: number): string{
    if(bmi < 18.5){
      return "Unerweight";
    }else if(bmi >= 18.5 && bmi <24.9){
      return 'Normal weight'
    }else if(bmi >= 24.9 && bmi < 29.9){
      return 'Overweight'
    }else{
      return "Obese"
    }
  }
}
