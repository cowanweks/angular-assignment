// geocoding.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

type Coordinates = {
  lon: number;
  lat: number;
};

@Injectable({
  providedIn: 'root',
})
export class GeocodingService {
  private API_KEY = '963728b80695d6adc259c50757109499';
  private API_URL = `http://api.openweathermap.org/geo/1.0/direct?appid=${this.API_KEY}`; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  async getCoordinates(name: string): Promise<any> {
    const newAPIURL = `${this.API_URL}&limit=5&q=${name}`;

    try {
      const response = await this.http.get<any>(newAPIURL).toPromise();
      return response[0];
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
