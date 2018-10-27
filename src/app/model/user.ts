import {Post} from "./post";

export class User {

  constructor(public userId: number,
              public givenName: string,
              public familyName: string,
              public email: string,
              public nickname: string,
              public dateCreated: Date,
              public picture: string,
              public posts: [Post]) {
  }
}

export function searchPost(user: User, id: string) :Post {
  for (let p of user.posts) {
    if(p._imageIds.indexOf(id) > -1){
      return p
    }
  }
}
