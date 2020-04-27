import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '../Models/Type';
import {Full} from '../Models/Full';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  getinfoUrl = 'http://localhost:3000/';

  constructor(private  http: HttpClient) {
  }

  async getInfo() {
    return this.http.get(this.getinfoUrl).toPromise();
  }

 async  sendreq(req) {

   return this.http.post('http://localhost:3000/add', req).toPromise();
  }

  async  getRequests() {

    return this.http.get('http://localhost:3000/requests').toPromise();
  }


}
