import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  constructor(private http: HttpClient) { }
  
  registerUser(data: any) {
    return this.http.post('http://localhost:3000/users', data);
  }

  private fullName: string| null = null
  setFullname(fullName: string): void{
    this.fullName = fullName;
  }
  getFullname(): string | null{
    return this.fullName;
  }
}
