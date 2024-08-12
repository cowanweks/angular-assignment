import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, // Import BrowserModule
    ReactiveFormsModule, // Import ReactiveFormsModule
    RouterOutlet,
    NavbarComponent,
    FormComponent,
  ],
  providers: [],
  bootstrap: [], // Bootstrap AppComponent
})
export class AppModule {}
