import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [NgIf],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  locationForm: FormGroup;
  weatherData: any;
  loading: boolean = true;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {
    const lon = 0; // Replace with actual longitude
    const lat = 0; // Replace with actual latitude

    this.locationForm = new FormGroup({
      location: new FormControl('', [Validators.required]),
    });

    this.weatherService.getCurrentWeather(lon, lat).subscribe(
      (data) => {
        this.weatherData = data;
        this.error = null; // Clear any previous errors
      },
      (error) => {
        console.error('Error in component:', error);
        this.error = 'Error fetching weather data';
      }
    );
  }

  get location() {
    return this.locationForm.get('location');
  }
  getWeather() {
    const coordinates = this.getRandomCoordinates();

    this.weatherService
      .getCurrentWeather(coordinates.lng, coordinates.lat)
      .subscribe(
        (data) => {
          this.weatherData = data;
          this.error = null; // Clear any previous errors
        },
        (error) => {
          console.error('Error in component:', error);
          this.error = 'Error fetching weather data';
        }
      );
  }

  getRandomCoordinates() {
    // Latitude ranges from -90 to 90 degrees
    const lat = Math.random() * 180 - 90;

    // Longitude ranges from -180 to 180 degrees
    const lng = Math.random() * 360 - 180;

    console.log({ lat, lng }); // For debugging

    return { lat, lng };
  }
}
