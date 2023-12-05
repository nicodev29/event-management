import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { CurrentEventComponentComponent } from './current-event-component/current-event-component.component';
import { StatusComponentComponent } from './status-component/status-component.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [  
 { path: '', component: WelcomeComponent },
 { path: 'create', component: CreateComponentComponent },
 { path: 'current', component: CurrentEventComponentComponent },
 { path: 'status-event', component: StatusComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }