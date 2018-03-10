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
});
