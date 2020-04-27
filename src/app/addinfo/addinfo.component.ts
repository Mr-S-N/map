import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../../servises/jsonplaceholder.service';

declare let L;
declare var $: any;

@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})
export class AddinfoComponent implements OnInit {

  public markerset: boolean = false;
  lat;
  lng;

  constructor(private  ja: JsonplaceholderService) {
  }

  ngOnInit() {
    const map = L.map('map').setView([48.379433, 31.16558], 5.5);
     const geocodeService = L.esri.Geocoding.geocodeService();
    var theMarker = {};
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.on('click', (e) => {
      if (theMarker != undefined) {
        map.removeLayer(theMarker);
      }
      theMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
        .openPopup();

      this.lng = e.latlng.lng;
      this.lat = e.latlng.lat;
      this.markerset = true;
    });
  }

  async Send(inform) {
    let res = await this.ja.sendreq({
      email: inform.value.email,
      file: inform.value.file,
      lat: this.lat,
      lng: this.lng
    });

    if (res === true) {
      alert('all done');
    } else {
      alert('sm wrong');
    }

  }
}
