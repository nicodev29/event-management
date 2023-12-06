import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login-component',
  templateUrl: './admin-login-component.component.html',
  styleUrls: ['./admin-login-component.component.css'],
})
export class AdminLoginComponentComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  errorMessage: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  onLogin(): void {
    console.log('Intentando iniciar sesión');
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    const success = this.adminService.login(this.username, this.password);
    this.loginFailed = !success;
    if (success) {
      console.log('Login exitoso');
      
      this.router.navigate(['edit-event']);
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
