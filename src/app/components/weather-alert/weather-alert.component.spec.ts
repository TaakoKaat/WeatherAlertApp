import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertComponent } from './weather-alert.component';
import { WeatherDataService } from '../../services/weather-data.service';
import { HttpModule } from '@angular/http';

describe('WeatherAlertComponent', () => {
  let component: WeatherAlertComponent;
  let fixture: ComponentFixture<WeatherAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherAlertComponent ],
      imports: [ HttpModule ],
      providers: [ WeatherDataService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('setupDate', () => {
    it('should set the high temperature alert', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 88,
        low: 60,
        text: '',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(1);
      expect(testForecast[0].alerts[0]).toBe('High Heat');
    });

    it('should set the low temperature alert', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 36,
        low: 30,
        text: '',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(1);
      expect(testForecast[0].alerts[0]).toBe('Freezing Temperature');
    });

    it('should set the rain alert', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 50,
        text: 'rain',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(1);
      expect(testForecast[0].alerts[0]).toBe('Rain');
    });

    it('should set the thunderstorm alert', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 50,
        text: 'Thunderstorm',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(1);
      expect(testForecast[0].alerts[0]).toBe('Thunderstorm');
    });

    it('should set the snow alert', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 50,
        text: 'Snow',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(1);
      expect(testForecast[0].alerts[0]).toBe('Snow');
    });

    it('should set the ice alert', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 50,
        text: 'Ice',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(1);
      expect(testForecast[0].alerts[0]).toBe('Ice');
    });

    it('should not set any alerts', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 50,
        text: 'Partly Cloudy',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(0);
    });

    it('should be able to set both the high and low temperature alerts', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 88,
        low: 20,
        text: 'Partly Cloudy',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(2);
      expect(testForecast[0].alerts.includes('High Heat')).toBeTruthy();
      expect(testForecast[0].alerts.includes('Freezing Temperature')).toBeTruthy();
    });

    it('should be able to set multiple weather alerts', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 50,
        text: 'Rain, Snow, Ice',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(3);
      expect(testForecast[0].alerts.includes('Rain')).toBeTruthy();
      expect(testForecast[0].alerts.includes('Snow')).toBeTruthy();
      expect(testForecast[0].alerts.includes('Ice')).toBeTruthy();
    });

    it('should be able to set both temperature and weather alerts', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 20,
        text: 'Rain',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].alerts).toBeDefined();
      expect(testForecast[0].alerts.length).toBe(2);
      expect(testForecast[0].alerts.includes('Rain')).toBeTruthy();
      expect(testForecast[0].alerts.includes('Freezing Temperature')).toBeTruthy();
    });

    it('should set the right date', () => {
      const testForecast = [{
        code: 30,
        date: '10 Mar 2018',
        day: 'Mon',
        high: 50,
        low: 50,
        text: '',
        alerts: [],
      }]
      component.setupData(testForecast);
      expect(testForecast[0].date).toBe("10 Mar");
    });
  });
});
