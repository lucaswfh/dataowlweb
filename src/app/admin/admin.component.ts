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

  public plants = []
  public admins = []
  public users = []
  public newType:string = null
  public newAdmin:string = null

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

  access_token() {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  addNewType(){
    this.itemService.addNewType(this.access_token(), this.newType)
      .subscribe(data => { });
      location.reload();
  }

  updateType(plant:String){
    
  }

  deleteType(plant:string){
    this.itemService.deleteType(this.access_token(), plant)
      .subscribe(data => { });
    location.reload();
  }

  id_token() {
    return `Bearer ${localStorage.getItem('id_token')}`;
  }

  addNewAdmin(){
    // console.log(this.newAdmin);
    this.userService.addAdmin(this.access_token(), this.id_token(), this.newAdmin)
      .subscribe(data => { console.log(data); });
      location.reload();
  }

}
