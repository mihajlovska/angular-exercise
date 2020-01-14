import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

constructor(private http: HttpClient) {
  this.usersUrl = 'http://localhost:8080/users';
}

getAll() {
  return this.http.get<User[]>(this.usersUrl);
}

register(user: User) {
  return this.http.post<User>(this.usersUrl, user);
}

delete(id: number) {
  return this.http.delete(`/users/${id}`);
}

}
