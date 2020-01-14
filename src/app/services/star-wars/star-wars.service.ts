import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarWarsResponse } from '../../models/star-wars-response';

const starWarsUrl = 'https://www.swapi.co/api/people';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

constructor(private http: HttpClient) { }

public getMembers(page: number = 1): Observable<StarWarsResponse> {
  return this.http.get<StarWarsResponse>(starWarsUrl, {params: {page: page.toString()}});
}

}
