import { Component, OnInit } from '@angular/core';
import { WebModule } from '../web.module';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent  {
  public markers: any[];
  public zoom: number;
  public center = { lat: 24, lng: 12 };

  constructor() {
    this.markers = [];
    this.zoom = 12;
  }

  ngOnInit() {
    if (!navigator.geolocation) {
      alert('Geolocalización No Compatible');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      let lat = 0;
      const coords = position.coords;
      console.log('lat: ', position.coords.latitude, ' long: ', position.coords.longitude);
      this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.markers.push({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        label: {
          color: "black",
          text: "You're here"
         }
      })
    });
  }
}
