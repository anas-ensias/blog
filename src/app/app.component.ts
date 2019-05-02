import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: 0,
      created_at: new Date('December 17, 2017 22:24:00')
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: 0,
      created_at: new Date('December 01, 2018 03:28:00')
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: 0,
      created_at: new Date('December 30, 2019 13:34:00')
    }
  ];
}
