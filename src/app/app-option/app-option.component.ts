import { Component } from '@angular/core';

import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-option',
  templateUrl: './app-option.component.html',
  styleUrls: ['./app-option.component.scss']
})

export class AppOptionComponent implements OnInit {
  public model: any;
  users = new Array<User>();

  constructor( usrService: UserService ) {

    usrService.getUsers().subscribe(response =>
    {
      this.users = response.map(item =>
      {
        return new User(
          item.login,
          item.avatar_url
        );
      });
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.users.filter(v => v.login.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {login: string}) => x.login;

}
