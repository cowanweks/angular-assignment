import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { WeatherComponent } from './weather.component';
import { HttpClient } from '@angular/common/http'; // Import HttpClientModule if using HttpClient

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule],
  providers: [HttpClient],
})
export class WeatherModule {}
