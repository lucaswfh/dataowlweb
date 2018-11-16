import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../services/item.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private plants = []
  private admins = []
  private users = []
  private newType:String = null
  private newAdmin:String = null

  constructor(public router: Router,
              private itemService: ItemService,
              private userService: UserService) { }

  ngOnInit() {
    this.itemService.getPlantTypes().subscribe(data => {
      this.plants = data
    });

    this.userService.getAllUsers().subscribe(data =>{
      data.forEach( d => {
          if (d.admin) {
            this.admins.push(d.email)
          }else{
            this.users.push(d.email)
          }
        }
      )
    })
  }

  addNewType(){

  }

  updateType(plant:String){

  }

  deleteType(plant:String){

  }

  addNewAdmin(){

  }
}
