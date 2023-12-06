import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CurrentEventComponent } from './components/current-event/current-event.component';
import { CreateComponent } from './components/create/create.component';
import { StatusEventComponent } from './components/status-event/status-event.component';
import { AdminLoginComponentComponent } from './components/admin-login-component/admin-login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CurrentEventComponent,
    CreateComponent,
    StatusEventComponent,
    AdminLoginComponentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
