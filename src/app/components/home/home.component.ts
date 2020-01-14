import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { Subscription } from 'rxjs';
import { UserAuthService } from 'src/app/services/user/auth/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private currentUser: User;
  private currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(private userAuthService: UserAuthService, private userService: UserService) {
    this.currentUserSubscription = this.userAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
   }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe (users => {
       this.users = users;
      });
  }

}
