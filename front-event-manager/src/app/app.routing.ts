import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CreateComponent } from './components/create/create.component';
import { CurrentEventComponent } from './components/current-event/current-event.component';
import { StatusEventComponent } from './components/status-event/status-event.component';
import { AdminLoginComponentComponent } from './components/admin-login-component/admin-login-component.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'current', component: CurrentEventComponent},
  { path: 'edit-event', component: StatusEventComponent},
  { path: 'login', component: AdminLoginComponentComponent}
  // otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }