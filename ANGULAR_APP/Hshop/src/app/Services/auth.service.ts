import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const currentUserJson = this.getLocalStorageItem('currentUser');
    let currentUser = null;
    if (currentUserJson) {
      try {
        currentUser = JSON.parse(currentUserJson);
      } catch (e) {
        console.error('Error parsing current user from local storage', e);
      }
    }
    this.currentUserSubject = new BehaviorSubject<any>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  private getLocalStorageItem(key: string): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  private removeLocalStorageItem(key: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  registerUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', data);
  }

  validateUser(email: string, password: string): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/users', {
      params: { email, password }
    }).pipe(
      map(users => users.length ? users[0] : null),
      catchError(error => {
        console.error('Error validating user', error);
        return of(null);
      })
    );
  }

  checkUserExists(email: string): Observable<boolean> {
    return this.http.get<any[]>('http://localhost:3000/users', { params: { email } }).pipe(
      map(users => users.length > 0),
      catchError(error => {
        console.error('Error checking if user exists', error);
        return of(false);
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.validateUser(email, password).pipe(
      map(user => {
        if (user) {
          this.setLocalStorageItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  logout(): void {
    this.removeLocalStorageItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
