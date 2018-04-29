import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    const myCenter = new google.maps.LatLng(24.699584, 46.718239);

    const mapProp = {
      center: new google.maps.LatLng(24.699584, 46.718239),
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      marker: new google.maps.Marker({position: myCenter})
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }
}
// 24.764299, 46.670872
