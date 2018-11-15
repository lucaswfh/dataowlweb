import { Router } from '@angular/router';
import { ItemService } from './../services/item.service';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-unchecked',
  templateUrl: './unchecked.component.html',
  styleUrls: ['./unchecked.component.css']
})
export class UncheckedComponent implements OnInit {

  images = []
  posts = []
  postSize = []
  itemsPerRow = 3
  mode = null;

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer,
    private itemService: ItemService,
    private router: Router) {
      this.mode = this.router.url;
  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts:any[]) => {
      const mode = this.router.url;
      posts.forEach(post => {
        const postMode = post.checked ? '/checked' : '/unchecked';
        if (mode == postMode) {
          this.itemService.getImageById(post._imageId).subscribe(data => {
            this.posts.push({
              _id: data._id,
              images: [this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + data.image)],
              email: post.email
            });
            this.calculatePostSize()
          });
        }
      });
    });
  }

  private calculatePostSize() {
    var amount = this.posts.length / 3

    for(var _i = 0; _i < amount; _i++){
      if(this.postSize.indexOf(this.postSize[_i]) == -1) {
        this.postSize.push(_i)
      }
    }
  }
}
