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
  
      
      const now = new Date().getTime();
      localStorage.setItem('lastLoginTime', now.toString());
  
      return true;
    }
    return false;
  }

 
  isAdmin(): boolean {
    if (!this.isAdminLoggedIn) {
      return false;
    }
  
    const lastLoginTime = parseInt(localStorage.getItem('lastLoginTime') || '0');
    const now = new Date().getTime();
  
    const expirationTime = 600000; // 10 minutos
  
    if (now - lastLoginTime > expirationTime) {
      this.logout();
      return false;
    }
  
    return true;
  }

  logout(): void {
    this.isAdminLoggedIn = false;
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('lastLoginTime'); // Elimina la hora del último login
  }
}
