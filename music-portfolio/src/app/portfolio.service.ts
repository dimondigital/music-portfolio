import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  getPortfolioElements(): Observable<Observable<any>> {
    return this.http.get<Observable<any>>('assets/data.json')
  }

  getAvailableGenres(): Observable<Observable<any>> {
    return this.http.get<Observable<any>>('assets/genres.json')
  }


}
