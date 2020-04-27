import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../../servises/jsonplaceholder.service';
import {Device} from '../../Models/Device';
/*import * as L from 'leaflet';*/


declare let L;
declare var require: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  all;
  data: Device[] = [];
  public img1 = require('../../assets/img/pin24.png');
  public img2 = require('../../assets/img/pin48.png');

  constructor(private  ja: JsonplaceholderService) {
  }

  async ngOnInit() {

    try {
      this.all = await this.ja.getInfo();
      this.data = this.all.devices;

    } catch (e) {

    }

    const map = L.map('map').setView([48.379433, 31.16558], 5.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const myIcon = L.icon({
      iconUrl: this.img1,
      iconRetinaUrl: this.img2,
      iconSize: [29, 24],
      iconAnchor: [9, 21],
      popupAnchor: [0, -14]
    });
    const markerClusters = L.markerClusterGroup();

    for (let i = 0; i < this.data.length; ++i) {
      const popup =  '<b> Adress:</b>' + '<br/>'
        + this.data[i].fullAddressEn + '<br/>'
        + '<b>TimeTable:</b>' + '<br/>' +
        'Mon - Fri:' + this.data[i].tw.mon + '<br/>' +
        'Sat - San:' + this.data[i].tw.sat
      ;

      const m = L.marker([this.data[i].longitude, this.data[i].latitude], {icon: myIcon})
        .bindPopup(popup);
      markerClusters.addLayer(m);

    }
    map.addLayer(markerClusters);

  }

}
