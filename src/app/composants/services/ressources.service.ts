import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { link } from './apiUrl';

// import { ressources } from './entreprenariat.model';
import { ressources } from './ressources.model';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {


  constructor ( private http : HttpClient) {}
  
  ressourcesData (){
    return this.http.get('http://[::1]:3000/ressources');
  }

  getKaayEntreprendres() : Observable<ressources[]>{
    return this.http.get<ressources []>('${link}');
  }

    // Liste
    getAlls() : Observable<any>{
      return this.http.get<ressources[]>(`${link}/kaay-entreprendre`);
    }

    // geteById
    getById(id: number)
    {
      return this.http.get<ressources>(`${link}/kaay-entreprendre/`+ id).pipe(
        catchError(error => throwError(error.error.message))
      );
    }

    // Ajouter
    addRessources(user : ressources) {
      return this.http.post<{ message: string }>('http://[::1]:3000/ressources', user);
    }

    // Modifieer
    modifierRessources(id: number, user : ressources) {
      return this.http.put<{ message: string }>(`${link}/kaay-entreprendre/` + id, user);
    }

    // Suppression
    deleteRessources(id: number) {
      return this.http.delete<{ message: string }>(`${link}/kaay-entreprendre/` + id);
    }
}
