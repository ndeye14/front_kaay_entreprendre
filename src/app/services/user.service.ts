import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {}

  // Liste
  getAlls() : Observable<any>{
    return this.http.get<User[]>(`${url}/user`);
  }

  // geteById
  getById(id: string)
  {
    return this.http.get<User>(`${url}/user/`+ id);
  }

  // Ajouter
  add(user: User) {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    // formData.append('image', image);
    // console.log("************ form data ************");
    // console.log(formData);
    return this.http.post<{ message: string }>(`${url}/register`, formData);
  }

  // Edition
  edit(id: string, user: User, image: string | File) {
    if (typeof image === 'string') {
      return this.http.put<{ message: string }>(`${url}/user/`  + id, user);
    } else {
      const formData = new FormData();

      formData.append('user', JSON.stringify(user));
      formData.append('image', image);

      return this.http.put<{ message: string }>(`${url}/user/` + id, formData);
    }
  }

  // Suppression
  delete(id: string) {
    return this.http.delete<{ message: string }>(`${url}/user/` + id);
  }
}
