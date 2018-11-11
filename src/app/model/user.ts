import {Post} from "./post";

export class User {

  constructor(
    public userId: number,
    public givenName: string,
    public familyName: string,
    public email: string,
    public nickname: string,
    public dateCreated: Date,
    public picture: string,
    public posts: [Post]) { }
    
}
