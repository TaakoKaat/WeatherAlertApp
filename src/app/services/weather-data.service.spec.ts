import { TestBed, inject } from '@angular/core/testing';

import { WeatherDataService } from './weather-data.service';
import { HttpModule } from '@angular/http';

describe('WeatherDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherDataService],
      imports: [HttpModule],
    });
  });

  it('should be created', inject([WeatherDataService], (service: WeatherDataService) => {
    expect(service).toBeTruthy();
  }));
  describe('getWeatherData', () => {
    it('should return a value', inject([WeatherDataService], (service: WeatherDataService)  => {
      const returnValue = service.getWeatherData();
      expect(returnValue).toBeDefined;
    }));
  });
});
