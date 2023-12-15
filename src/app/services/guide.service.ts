import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './apiUrl';
import { Guide } from '../models/Guide.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  // http: any;

  constructor(private http: HttpClient, private router: Router) { }


   // Liste
   getGuides() : Observable<any>{
    return this.http.get<any[]>(`${url}/guideIndex`);
    
  }


  
  getProduitById(id: number): Observable<any> {
    return this.http.get<any>(`${url}/guideStore/${id}`);
  }

  postGuide(ressourceData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/guideStore', ressourceData);
  }

  // createProduit(productData: any): Observable<any> {
  //   return this.http.post(this.apiUrl, productData);
  // }
  deleteProduit(id: any): Observable<any> {
    return this.http.delete<any>(`${url}/guideStore/${id}`)
  }

  putProduit(id: any, guide: any): Observable<any> {
    return this.http.put<any>(`${url}/guideStore/${id}`, guide)
  }


}
