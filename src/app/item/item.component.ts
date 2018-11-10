import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../services/item.service";
import {Item} from "../model/item";
import {UserService} from "../services/user.service";
import {searchPost, User} from "../model/user";
import {Post} from "../model/post";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public id: string;
  public sub: any;
  public item: Item;
  public user: User;
  public type : string;
  public lat: number;
  public lng: number;
  public name: string;
  public lastName: string;
  public picture: string;
  public selectedType: string;

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private userService: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['itemId'];
      this.itemService.getItemById(this.id)
        .subscribe((item: Item) => {
            this.item = item;
            console.log(item);
            this.userService.getUserByEmail(this.item.email)
              .subscribe((user: User) => {
                this.user = user;
                this.setPostParams()
                this.setUserParams()
              })
        })
    });
  }

  private setPostParams() {
    let postTmp = searchPost(this.user, this.id)

    this.type = postTmp.type;
    this.lat = postTmp.geolocation.lat;
    this.lng = postTmp.geolocation.lng;
  }

  private setUserParams() {
    this.name = this.user.givenName;
    this.lastName = this.user.familyName;
    this.picture = this.user.picture;
  }

  public updateType() {
    this.type = this.selectedType;
    // TODO: Mandar al server el cambio
  }
}
