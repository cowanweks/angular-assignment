import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = '963728b80695d6adc259c50757109499';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; // Use appropriate API endpoint

  constructor(private http: HttpClient) {
    console.log('WeatherService initialized');
  }

  getCurrentWeather(lon: number, lat: number): Observable<any> {
    const url = `${this.BASE_URL}?lon=${lon}&lat=${lat}&appid=${this.API_KEY}&units=metric`; // Modify units if needed
    return this.http.get(url).pipe(
      catchError((error) => {
        console.error('Error fetching weather data:', error);
        return throwError(() => new Error('Error fetching weather data'));
      })
    );
  }
}
