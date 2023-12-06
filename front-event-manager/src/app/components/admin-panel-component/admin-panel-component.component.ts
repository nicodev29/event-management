import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel-component',
  templateUrl: './admin-panel-component.component.html',
  styleUrls: ['./admin-panel-component.component.css']
})



export class AdminPanelComponentComponent {

cancel() {
  this.router.navigate(['']);
}

constructor(private router: Router) {
  
 }

onCreate() {
  this.router.navigate(['create']);
}
editEvent() {
throw new Error('Method not implemented.');
}
onActual() {
  this.router.navigate(['/current']);
}
login() {
throw new Error('Method not implemented.');
}

getAll() {
  this.router.navigate(['get-all']);
  }

}
