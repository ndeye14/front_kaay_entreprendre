import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class PartageExperienceService {
    constructor ( private http : HttpClient) {}

    postPartageExperience(ressourceData: any): Observable<any> {
        return this.http.post<any>('http://localhost:8000/api/experienceStore', ressourceData);
      }
}