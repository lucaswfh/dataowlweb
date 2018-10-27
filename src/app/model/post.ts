import {Geo} from "./geo";
import {Comment} from "./comment";

export class Post{
  constructor(
    public postId: number,
    public type: string,
    public geolocation: Geo,
    public _imageIds: [string],
    public comments: [Comment],
  ) { }
}
