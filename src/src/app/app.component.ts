import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { ADD_USER } from './store/actions/actions';
import { UserData } from './data/userdata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: UserData = {
    id : 10,
    name : 'Pruthwiraj Jagadale'
  };
  constructor(private _userService : UserService){
    this._userService.updateUserState({
      action : ADD_USER,
      payload : this.user
    })
  }

  ngOnInit(){
    this._userService.getUserState()
        .subscribe(state => {
          console.log(state);
        })
  }
}
