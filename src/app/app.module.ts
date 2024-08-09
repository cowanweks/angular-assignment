import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    FormComponent, // Declare FormComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule
    ReactiveFormsModule, // Import ReactiveFormsModule
    RouterOutlet,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap AppComponent
})
export class AppModule {}
