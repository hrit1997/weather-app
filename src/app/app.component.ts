import { Component } from '@angular/core';
import { GetApiService } from './get-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  address = '';
  constructor( private api:GetApiService){

  }

  TrySearch(){
    console.log('Pressed');
    var one = <HTMLInputElement>document.getElementById('one');
    var str = one.value.toLowerCase();
    this.address = 'http://api.openweathermap.org/data/2.5/weather?q='+ str + '&appid=347d8d435a0c2efda2191594ca0b39bd'
    console.log(this.address);
    this.api.GetAddress(this.address);
    this.api.apiCall().subscribe((data)=>{
      console.warn("getdata",data);
      var temp = data['main']['temp'] - 273.15;
      var tempma = data['main']['temp_max'] - 273.15;
      var tempmi = data['main']['temp_min'] - 273.15;
      document.getElementById('te').innerText = temp.toFixed(1).toString() + ' C' ;
      document.getElementById('mate').innerText = tempma.toFixed(1).toString() + ' C' ;
      document.getElementById('mite').innerText = tempmi.toFixed(1).toString() + ' C' ;
      document.getElementById('hu').innerText = data['main']['humidity'];
      var city = data['name']+', '+ data['sys']['country']
      document.getElementById('ct_tag').innerText = city;
      var condition = data['weather']['0']['main']
      document.getElementById('cnd_tag').innerText = condition;
      var card = document.getElementById('m_c');
      if(condition == 'Haze')
      {
        card.style.backgroundImage = "url('../assets/img/SOUTHEASTASIA-HAZE_1609_1568598751.jpg')";
      } 
      else if (condition=='Clouds')
      {
        card.style.backgroundImage = "url('../assets/img/ab000f469819dd7ef2a7e427e15305ff.jpg')";
      }
      else if (condition=='Clear')
      {
        card.style.backgroundImage = "url('../assets/img/depositphotos_7164275-stock-illustration-summer.jpg')";
      }
      else if (condition=='Rain')
      {
        card.style.backgroundImage = "url('../assets/img/rain-644x429.jpg')";
      }
      else if (condition=='Drizzle')
      {
        card.style.backgroundImage = "url('../assets/img/Weather-update-Drizzle-in-many-areas-of-Delhi-NCR-Haryana-and-Rajasthan-also-expected-to-rain.jpg')";
      }
    })
  }
}