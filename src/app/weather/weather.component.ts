import { GeocodingService } from './../geocoding.service';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  locationForm: FormGroup;
  weatherData: any;
  loading: boolean = true;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {
    this.locationForm = new FormGroup({
      location: new FormControl('', [Validators.required]),
    });
  }

  get location() {
    return this.locationForm.get('location');
  }
  async getWeather() {
    if (this.locationForm.valid) {
      console.log(this.locationForm.value);
      this.weatherService
        .getCurrentWeather(this.location?.value)
        .then((data) => {
          this.weatherData = data;
        });
    }
  }

  onSubmit() {
    this.getWeather();
  }
}
