import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CreateComponent } from './components/create/create.component';
import { CurrentEventComponent } from './components/current-event/current-event.component';
import { AdminLoginComponentComponent } from './components/admin-login-component/admin-login-component.component';
import { AdminPanelComponentComponent } from './components/admin-panel-component/admin-panel-component.component';
import { UserPanelComponentComponent } from './components/user-panel-component/user-panel-component.component';
import { AdminGuard } from './admin.guard';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { StatusEventComponent } from './components/status-event/status-event.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { EnrolledEventsComponent } from './components/enrolled-events/enrolled-events.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'current', component: CurrentEventComponent},
  { path: 'edit-event', component: StatusEventComponent},
  { path: 'login', component: AdminLoginComponentComponent},
  { path: 'admin', component: AdminPanelComponentComponent},
  { path: 'user', component: UserPanelComponentComponent},
  { path: 'admin', component: AdminLoginComponentComponent, canActivate: [AdminGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AdminGuard] },
  { path: 'edit-event', component: AdminLoginComponentComponent, canActivate: [AdminGuard] },
  { path: 'get-all', component: AllEventsComponent, canActivate: [AdminGuard] },
  { path: 'user-event', component: UserEventsComponent},
  { path: 'enrolled-events', component: EnrolledEventsComponent},



];
  // otras rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }