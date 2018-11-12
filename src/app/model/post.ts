import {Geo} from "./geo";
import {Comment} from "./comment";

export class Post{

  public items;
  public checked = false;

  constructor(
    public _id: string,
    public type: string,
    public geolocation: Geo,
    public _imageIds: [string],
    public comments: [Comment]
  ) { }

}

export function addItem(post, item) {
  if (!post.items)
    post.items = [];

  post.items.push(item);
}
