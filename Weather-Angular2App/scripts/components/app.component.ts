import { Component, OnInit } from '@angular/core';
import { Coordinate }  from './../Coordinate'
import { Map }  from './map.component'
import { WeatherTable }  from './weatherTable.component'

@Component({
  selector: 'app',
  template: `<div class="position">Current position: latitude - {{coordinate.getLatitude()}}, longitude - {{coordinate.getLongitude()}}</div>
    <weather-table [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></weather-table>
    <map [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></map>
    <footer></footer>`,
  styles: ['.position {text-align: center;margin-top: 10px;color: red;}']
})
export class App implements OnInit {
  coordinate: Coordinate;
  constructor() {
    this.coordinate = new Coordinate(0, 0);
  }
  ngOnInit(): void {
    let self = this;
    navigator.geolocation.getCurrentPosition(setPosition);
    function setPosition(pos: Position): void {
       self.coordinate.setLatitude(pos.coords.latitude);
       self.coordinate.setLongitude(pos.coords.longitude);
    }
  }
}