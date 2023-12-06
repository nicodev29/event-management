import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isAdminLoggedIn: boolean;

  constructor() {
    this.isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAdminLoggedIn = true;
      localStorage.setItem('isAdminLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAdminLoggedIn = false;
    localStorage.removeItem('isAdminLoggedIn');
  }

  isAdmin(): boolean {
    return this.isAdminLoggedIn;
  }
}
