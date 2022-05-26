import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../model/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  public getUsers(){
    return this.http.get('/server/user')
  }

  public addUser(user: User){
    let body = JSON.stringify(user);
    return this.http.post('/server/user', body, httpOptions);
  }

  public updateUser(user: User){
      return this.http.put('/server/user', user);
  }
}
