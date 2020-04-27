import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../servises/jsonplaceholder.service';
import {Device} from '../Models/Device';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'map';
  all;
  data: Device[] = [];

  constructor(private  ja: JsonplaceholderService, private router: Router) {
  }

  ngOnInit() {

    this.router.navigate(['/map']);
  }
}


