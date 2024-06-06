import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post('http://localhost:3000/users', data);
  }

  validateUser(email: string, password: string): Observable<any>{
    return this.http.get<any>('http://localhost:3000/users', {
      params: {email, password}
    })
  }

  checkUserExiste(email: string): Observable<boolean>{
    return this.http.get<any[]>('http://localhost:3000/users', {params: {email}}).pipe(
      map(users => users.length >0),
      catchError(error => {
        console.error("Error checking if user exists", error);
        return of(false)
      })
    )
  }
}
