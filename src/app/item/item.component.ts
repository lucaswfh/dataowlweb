import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../services/item.service";
import {UserService} from "../services/user.service";
import { Post, addItem } from '../model/post';
import { User } from '../model/user';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public selectTypeDefault: string = 'Select Type...';
  public planttypes = null;
  public selectedType: string;
  public post:Post;
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private userService: UserService,
    public auth: AuthService,
    public sanitizer: DomSanitizer,
    public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemService.getPostById(params['itemId'])
        .subscribe((post:Post) => {
            this.post = post;
            this.post._imageIds.forEach(imageId => {
              this.itemService.getImageById(imageId)
              .subscribe(image => {
                addItem(this.post, image);
                this.getUserByEmail(image.email);
              });
            });
        });
    });

    this.itemService.getPlantTypes().subscribe(data => {
      this.planttypes = data
    });
  }

  getUserByEmail(email) {
    if (!this.user) {
      this.userService.getUserByEmail(email).subscribe((user: User) => {
        if (!this.user) this.user = user;
      });
    }
  }

  deletePost() {
    if(confirm("Are you sure?")) {
      console.log(this.post);
      this.itemService.deletePost(this.post) 
        .subscribe(data => {
          this.router.navigate(['/welcome']);
        });
    }
  }

  done() {
    this.itemService.setChecked(this.post)
      .subscribe((post: Post) => {
        this.post.checked = post.checked;
      });
  }

  updateType() {
    if (this.selectedType != this.selectTypeDefault) {
      const access_token = localStorage.getItem('access_token');
      this.itemService.updateType(this.selectedType, this.post, access_token)
        .subscribe(post => {
          this.post.type = post.type;
        });
    } else {
      // TODO: avisar que no se selecciono ningun type
    }
  }

  postImages() {
    return this.post.items;
  }

}
