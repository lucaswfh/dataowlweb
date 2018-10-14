import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { PostService } from '../post.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images = []

  posts = []

  constructor(private postService: PostService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.imageService.getImages().subscribe((images:any[]) => {
    //   images.forEach(img => {
    //     this.images.push({
    //       "image": this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + img.image)
    //     });
    //   });
    // });
    this.postService.getAllPosts().subscribe((posts:any[]) => {
      posts.forEach(post => {
        this.posts.push({
          _id: post._id,
          //nickname: post.nickname,
          images: post.image(image =>
            this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + image)
          )
        })
      })
    });
  }

}
