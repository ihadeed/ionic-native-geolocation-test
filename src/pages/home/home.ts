import { Component } from '@angular/core';
import { Coordinates, Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: Coordinates;

  constructor(private geolocation: Geolocation, private platform: Platform) {}

  async getLocation() {
    await this.platform.ready();
    const { coords } = await this.geolocation.getCurrentPosition();
    this.location = coords;
  }

}
