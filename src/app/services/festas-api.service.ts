import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FestasModel } from './festas-api.model';

@Injectable({
  providedIn: 'root'
})
export class FestasApiService {

  dbUrl: string = "http://localhost:3000/festas"

  constructor(private httpClient: HttpClient) { }

  getDados(): Observable<FestasModel[]> {
    return this.httpClient.get<FestasModel[]>(this.dbUrl);
  }

  getDadosById(id: number): Observable<FestasModel> {
    return this.httpClient.get<FestasModel>(`${this.dbUrl}/${id}`);
  }

  postDados(festa: any): Observable<FestasModel> {
    return this.httpClient.post<FestasModel>(this.dbUrl, festa);
  }

  // putImages(id: number, body: any) {
  //   return this.httpClient
  //   .put(this.dbUrl + "/" + id, body)
  //   .subscribe((data) => {
  //     return data;
  //   });
  // }
}
