import {Component, OnInit, HostListener, ViewChild} from '@angular/core';
import {JsonplaceholderService} from '../../servises/jsonplaceholder.service';
import {Device} from '../../Models/Device';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  all;
  data = [];
  isLoading = true;
  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {


    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }


  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  constructor(private  ja: JsonplaceholderService, private router: Router) {
  }

  info(d) {
    this.router.navigate(['/info'], {queryParams: d});
  }

  async ngOnInit() {

    try {
      this.all = await this.ja.getInfo();
      this.data = this.all.devices;
      this.isLoading = false;

    } catch (e) {

    }
    $(document).ready(function () {
      $('#myTable').DataTable();
    });

  }

}
