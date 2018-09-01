import { Component, OnInit } from '@angular/core';
import {HerbimageService} from "../herbimage/herbimage.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images = []

  constructor(private imageService: HerbimageService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.imageService.getImages().subscribe((images:any[]) => {
      images.forEach(img => {
        this.images.push({
          "image": this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + img.image)
        });
      });
    });
  }

}
