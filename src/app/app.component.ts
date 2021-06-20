import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';
  address =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    'udaipur' +
    '&appid=347d8d435a0c2efda2191594ca0b39bd';
  constructor(private api: GetApiService) {}

  date = new Date();
  digit = this.date.getDate();
  month = this.date.toLocaleString('default', { month: 'short' });
  year = this.date.getFullYear();

  city: string;
  country: string;
  condition: string;
  temperature: string;
  humidity: string;
  visibility: string;
  pressure: string;
  wind: string;

  ngOnInit() {
    this.api.GetAddress(this.address);
    this.api.apiCall().subscribe((data) => {
      this.condition = data['weather']['0']['main'];
      this.country = data['sys']['country'];
      this.city = data['name'];
      var temp = data['main']['temp'] - 273.15;
      this.temperature = temp.toFixed(1);
      this.humidity = data['main']['humidity'] + '%';
      var vis = data['visibility'] / 1000;
      this.visibility = vis.toFixed(1) + ' Km';
      this.pressure = data['main']['pressure'] + ' hPa';
      var speed = data['wind']['speed'] * (18 / 5);
      this.wind = speed.toFixed(2) + ' km/h';

      var icon = <HTMLImageElement>document.getElementById('w_icon');
      switch (this.condition) {
        case 'Clouds':
          icon.src = 'assets/img/27.png';
          break;
        case 'Clear':
          icon.src = 'assets/img/26.png';
          break;
        case 'Haze':
          icon.src = 'assets/img/18.png';
          break;
        case 'Rain':
          icon.src = 'assets/img/7.png';
          break;
        case 'Drizzle':
          icon.src = 'assets/img/8.png';
          break;
        case 'Mist':
          icon.src = 'assets/img/4.png';
          break;
        default:
          icon.src = 'assets/img/26.png';
          break;
      }
    });
  }

  TrySearch() {
    var one = <HTMLInputElement>document.getElementById('one');
    var str = one.value.toLowerCase();
    this.address =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      str +
      '&appid=347d8d435a0c2efda2191594ca0b39bd';

    this.api.GetAddress(this.address);
    this.api.apiCall().subscribe((data) => {
      this.condition = data['weather']['0']['main'];
      this.country = data['sys']['country'];
      this.city = data['name'];
      var temp = data['main']['temp'] - 273.15;
      this.temperature = temp.toFixed(1);
      this.humidity = data['main']['humidity'] + '%';
      var vis = data['visibility'] / 1000;
      this.visibility = vis.toFixed(1) + ' Km';
      this.pressure = data['main']['pressure'] + ' hPa';
      var speed = data['wind']['speed'] * (18 / 5);
      this.wind = speed.toFixed(2) + ' km/h';

      var icon = <HTMLImageElement>document.getElementById('w_icon');
      switch (this.condition) {
        case 'Clouds':
          icon.src = 'assets/img/27.png';
          break;
        case 'Clear':
          icon.src = 'assets/img/26.png';
          break;
        case 'Haze':
          icon.src = 'assets/img/18.png';
          break;
        case 'Rain':
          icon.src = 'assets/img/7.png';
          break;
        case 'Drizzle':
          icon.src = 'assets/img/8.png';
          break;
        case 'Mist':
          icon.src = 'assets/img/4.png';
          break;
        default:
          icon.src = 'assets/img/26.png';
          break;
      }
    });
  }
}
