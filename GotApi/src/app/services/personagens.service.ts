import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  apiUrl = 'https://thronesapi.com/api/v2/Characters'
  constructor(private httpClient: HttpClient) { }

  getPersonagens():Observable<any>{
    return this.httpClient.get<any>(this.apiUrl)
  }
}
