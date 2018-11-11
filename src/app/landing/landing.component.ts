import { ItemService } from './../services/item.service';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images = []

  posts = []

  constructor(private postService: PostService, private sanitizer: DomSanitizer, private itemService: ItemService) {
  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts:any[]) => {
      posts.forEach(post => {
        console.log(post);
        this.itemService.getImageById(post._imageId).subscribe(data => {
          this.posts.push({
            _id: data._id,
            images: [this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + data.image)],
            email: post.email
          });
        });
      });
    });
  }

}
