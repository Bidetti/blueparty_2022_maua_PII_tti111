import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FestasModel } from './festas-api.model';

@Injectable({
  providedIn: 'root'
})
export class FestasApiService {

  dbUrl: string = "http://localhost:3000/items"

  constructor(private httpClient: HttpClient) { }

  getDados(): Observable<FestasModel[]> {
    return this.httpClient.get<FestasModel[]>(this.dbUrl);
  }

  putImages(id: number, body: any) {
    return this.httpClient
    .put(this.dbUrl + "/" + id, body)
    .subscribe((data) => {
      return data;
    });
  }
}
