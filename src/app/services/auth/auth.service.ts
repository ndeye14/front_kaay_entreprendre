import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable , tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { url } from '../apiUrl';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth$ = new BehaviorSubject<boolean>(false); //var super globale initialisé à false permet de savoir si user est auth ou pas
   isAdmin$ = new BehaviorSubject<boolean>(false); //var super globale initialisé à false permet de savoir si user est auth ou pas
  private authToken = '';
  private userId = '';
  constructor(private http: HttpClient, private router: Router) { }

  // Créer un utilisateur. message: string et le retour k'on atend du back
  createUser(user: User) {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    // formData.append('image', image);

    return this.http.post<{ message: string }>(`${url}/user`, formData);
  }

  // Retourne la val du token envoyé par le back sous forme d'objet => Exemple :  { "userId": "6477aad2457309c8a3e3d031", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc3YWFkMjQ1NzMwOWM4YTNlM2QwMzEiLCJpYXQiOjE2ODU2MjMzOTksImV4cCI6MTY4NTcwOTc5OX0.18cpQsPFDGJWTFKeRHn92mOwLS04BDDAeewWo582rvM"}
  getToken() {
    return this.authToken;
  }

   // Retourne la val du token envoyé par le back sous forme d'objet
  getUserId() {
    return this.userId;
  }

  // Authentifie user. { userId: string, token: string } pr dire on attend en reponse ceci
  loginUser(email: string, password: string) {
    return this.http.post<{ userId: string, token: string }>('http://127.0.0.1:8000/api/login', {email: email, password: password}).pipe(
      tap(({ userId, token }) => {
        this.userId = userId;
        this.authToken = token;
        if ( email == "admin@gmail.com" && password == "passer") {
          this.isAdmin$.next(true);
        }

        this.isAuth$.next(true); // on met à je la val de isAuth$
      })
    );
  }

  logout() {
    // On vide les infos du token et on met à je la val de isAuth$
    this.authToken = '';
    this.userId = '';
    this.isAuth$.next(false);
    this.isAdmin$.next(false);
    this.router.navigate(['login']);
  }




}
