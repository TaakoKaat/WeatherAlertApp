import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherAlertComponent } from './components/weather-alert/weather-alert.component';
import { WeatherDataService } from './services/weather-data.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
