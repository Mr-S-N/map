import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Device} from '../../Models/Device';
import {from} from 'rxjs';

declare let L;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  dev;

  constructor(private  acRout: ActivatedRoute) {
  }

  ngOnInit() {
    this.acRout.queryParams.subscribe((p) => {
      this.dev = p;
       console.log(this.dev)
       console.log(this.dev.tw);
    });
    const map = L.map('map').setView([48.379433, 31.16558], 5.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([+this.dev.longitude, +this.dev.latitude]).addTo(map)
      .openPopup();


  }

}
