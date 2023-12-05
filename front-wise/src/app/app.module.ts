import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Importa los módulos de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Importa tus componentes
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { CreateComponentComponent } from "./create-component/create-component.component";
import { CurrentEventComponentComponent } from "./current-event-component/current-event-component.component";
import { StatusComponentComponent } from "./status-component/status-component.component";
import { AppRoutingModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateComponentComponent,
    CurrentEventComponentComponent,
    StatusComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Asegúrate de que AppComponent esté aquí
})
export class AppModule { }
