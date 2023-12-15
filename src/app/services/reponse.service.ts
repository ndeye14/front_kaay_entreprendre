

export class ReponseService {
    reponse = '';
addReponse(user : reponse) {
    return this.http.post<{ message: string }>('http://127.0.0.1:8000/api/reponse', user);
  }

}