import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';

@Component({
  selector: 'app-weather-alert',
  templateUrl: './weather-alert.component.html',
  styleUrls: ['./weather-alert.component.css']
})
export class WeatherAlertComponent implements OnInit {

  forecast: ForecastDay[];
  public city: string;

  constructor(private weatherData: WeatherDataService) { }

  ngOnInit() {
    this.weatherData.getWeatherData().subscribe((weather) => {
      this.city = weather.query.results.channel.location.city;
      this.forecast = weather.query.results.channel.item.forecast;
      this.setAlerts(this.forecast);
    });
  }

  setAlerts(forecastArray: ForecastDay[]) {
    forecastArray.forEach(forecast => {
      forecast.alerts = [];
      // Set temp alerts
      if(forecast.high > 85) {
        forecast.alerts.push('High Heat');
      }
      if(forecast.low < 32) {
        forecast.alerts.push('Freezing Temperature');
      }

      // Set weather alerts
      if(forecast.text.includes('Rain') || forecast.text.includes('rain')) {
        forecast.alerts.push('Rain');
      }
      if(forecast.text.includes('Thunderstorm') || forecast.text.includes('thunderstorm')) {
        forecast.alerts.push('Thunderstorm');
      }
      if(forecast.text.includes('Snow') || forecast.text.includes('snow')) {
        forecast.alerts.push('Snow');
      }
      if(forecast.text.includes('Ice') || forecast.text.includes('ice')) {
        forecast.alerts.push('Ice');
      }
    })
  }
}

interface ForecastDay {
  code: number;
  date: string;
  day: string;
  high: number;
  low: number;
  text: string;
  alerts?: string[];
}