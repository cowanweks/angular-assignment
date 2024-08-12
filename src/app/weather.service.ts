import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { GeocodingService } from './geocoding.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private lon: number = 0.0;
  private lat: number = 0.0;
  private API_KEY = '963728b80695d6adc259c50757109499';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; // Use appropriate API endpoint

  constructor(private http: HttpClient, private geoservice: GeocodingService) {
    console.log('WeatherService initialized');
  }

  async getCurrentWeather(place: string): Promise<any> {
    const { lon, lat } = await this.geoservice.getCoordinates(place);
    const url = `${this.BASE_URL}?lon=${lon}&lat=${lat}&appid=${this.API_KEY}&units=metric`; // Modify units if needed

    try {
      const response = await this.http.get<any>(url).toPromise();
      return response;
    } catch (error) {
      this.handleError(error);
      throw error; // Rethrow error after handling
    }
  }

  private handleError(error: unknown): void {
    if (error instanceof HttpErrorResponse) {
      // Customize the error handling logic here
      console.error('An error occurred:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
}
