import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() posts: Post;
  loveit = [0, 0 , 0];

  onAddLoveIt(i, pl) {
    this.loveit[i] = pl + 1;
  }

  onRemoveLoveIt(i, pl) {
    this.loveit[i] = pl - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
