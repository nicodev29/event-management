import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private isAdminLoggedIn = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Aquí validas el nombre de usuario y la contraseña
    if (username === 'admin' && password === 'admin') {
      this.isAdminLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAdminLoggedIn = false;
  }

  isAdmin(): boolean {
    return this.isAdminLoggedIn;
  }
}
