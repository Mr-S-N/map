import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MapComponent} from './map/map.component';
import {ListComponent} from './list/list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info/info.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { XzComponent } from './xz/xz.component';
import { AdminComponent } from './admin/admin.component';
import { RequestComponent } from './request/request.component';






const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'list', component: ListComponent},
  {path: 'info', component: InfoComponent},
  {path: 'addinfo', component: AddinfoComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'request', component: RequestComponent},
  {path: 'xz', component: XzComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListComponent,
    InfoComponent,
    AddinfoComponent,
    XzComponent,
    AdminComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,



    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
