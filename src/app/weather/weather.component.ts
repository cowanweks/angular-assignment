import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const lon = 0; // Replace with actual longitude
    const lat = 0; // Replace with actual latitude

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
}
