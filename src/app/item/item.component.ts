import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

  public selectType: string = 'Select Type...';

  public selectedType: string;
  public post:Post;
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private userService: UserService,
    public auth: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemService.getPostById(params['itemId'])
        .subscribe((post:Post) => {
            this.post = post;
            console.log(post);
            this.post._imageIds.forEach(imageId => {
              this.itemService.getImageById(imageId)
              .subscribe(image => {
                addItem(this.post, image);
                this.getUserByEmail(image.email);
              });
            });
        })
    });
  }

  getUserByEmail(email) {
    if (!this.user) {
      this.userService.getUserByEmail(email).subscribe((user: User) => {
        if (!this.user) this.user = user;
      });
    }
  }

  updateType() {
    if (this.selectedType != this.selectType) {
      const access_token = localStorage.getItem('access_token');
      console.log(access_token);
      this.itemService.updateType(this.selectedType, this.post, access_token).subscribe(post => {
        this.post.type = post.type;
        console.log(post);
      });
    } else {
      // TODO: avisar que no se selecciono ningun type
    }
  }

}
