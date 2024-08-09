import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'api',
    component: WeatherComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];
