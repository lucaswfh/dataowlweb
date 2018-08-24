import { Component } from '@angular/core';
import { HerbimageService } from './herbimage/herbimage.service';
import { DomSanitizer } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DataOwlWeb';

  images = []

  constructor(private imageService: HerbimageService, private sanitizer:DomSanitizer) { 
    imageService.getImages().subscribe((images:any[]) => {
      images.forEach(img => {
        this.images.push({
          "image": sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + img.image)
        })
      })
    })
  }

}
