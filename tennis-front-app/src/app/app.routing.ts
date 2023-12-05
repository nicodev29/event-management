import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CreateComponent } from './components/create/create.component';
import { CurrentEventComponent } from './components/current-event/current-event.component';
import { StatusEventComponent } from './components/status-event/status-event.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'current', component: CurrentEventComponent},
  { path: 'status-event', component: StatusEventComponent}
  // otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }