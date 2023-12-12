import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';

import { url } from './apiUrl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuth$ = new BehaviorSubject<boolean>(false); //var super globale initialisé à false permet de savoir si user est auth ou pas
  isAdmin$ = new BehaviorSubject<boolean>(false); //var super globale initialisé à false permet de savoir si user est auth ou pas
  // isManager$ = new BehaviorSubject<boolean>(false); //var super globale initialisé à false
  private authToken = '';
  private userId = '';
  // private userConnect = '';


  constructor(private http: HttpClient, private router: Router) { }






  // *************** GESTION AUTH ****************

  // Retourne la val du token envoyé par le back sous forme d'objet => Exemple :  { "userId": "6477aad2457309c8a3e3d031", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc3YWFkMjQ1NzMwOWM4YTNlM2QwMzEiLCJpYXQiOjE2ODU2MjMzOTksImV4cCI6MTY4NTcwOTc5OX0.18cpQsPFDGJWTFKeRHn92mOwLS04BDDAeewWo582rvM"}
  getToken() {
    return this.authToken;
  }

   // Retourne la val du token envoyé par le back sous forme d'objet
  getUserId() {
    // console.log(this.userId);
    return this.userId;

  }
  // Exemple de fonction pour effectuer une requête HTTP GET
  getSomeData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/login');
  }

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
    // const formData = new FormData();
    // formData.append('user', JSON.stringify(user));
    // console.log("************ form data ************");
    // console.log(formData);
    return this.http.post<{ message: string }>(`${url}/register`, user);
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


  // *************** GESTION USER ****************

  // Authentifie user. { userId: string, token: string } pr dire on attend en reponse ceci
  loginUser(email: string, password: string) {
    return this.http.post<any>('http://127.0.0.1:8000/api/login', {email: email, password: password}).pipe(
      tap(({ userId, token }) => {
        this.userId = userId;


        this.authToken = token;
        if ( email == "admin@gmail.com" && password == "passer") {
          this.isAdmin$.next(true);
        }

         console.log(this.isAuth$);
        this.isAuth$.next(true);
        // on met à je la val de isAuth$
      })
    );
  }
  logOut() {
    return this.http.get<any>('http://127.0.0.1:8000/api/logout').pipe(
      tap(({ userId, token }) => {
        this.userId = userId;
        // on met à je la val de isAuth$
      })
    );
  }



  logout() {
    return this.http.get<any>('http://127.0.0.1:8000/api/logout').pipe(
      tap(() => {
        this.authToken = '';
        this.userId = '';
        this.isAuth$.next(false);
        this.isAdmin$.next(false);
        this.router.navigate(['login']);
      })
    );
    // On vide les infos du token et on met à je la val de isAuth$ 
  }
}
