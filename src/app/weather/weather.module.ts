import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { WeatherService } from '../weather.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [WeatherService],
})
export class WeatherModule {}
