import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../../servises/jsonplaceholder.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  isloged = true;
  req;
  reqs;

  constructor(private  ja: JsonplaceholderService) {
  }

 async ngOnInit() {
    this.reqs = await  this.ja.getRequests();
  }

  Login(loginform) {
    if (loginform.value.login === 'admin' && loginform.value.password === 'admin') {
      this.isloged = true;
    }
  }
}
