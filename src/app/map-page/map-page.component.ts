import {ActivatedRoute, Router} from "@angular/router";

declare var google: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  id: string;
  lat: number;
  lng: number;
  mapZoom:number = 15;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id']
        this.lat = +params['lat'];
        this.lng = +params['lng'];
      });
  }

}
