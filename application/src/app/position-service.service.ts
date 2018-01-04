import { Injectable } from '@angular/core';
import { Position } from './data/position';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class PositionServiceService {

    private url = "https://teams-api-web422.herokuapp.com";

  constructor(private http: HttpClient ) { }

   getPositions(): Observable<Position[]> { 
     return this.http.get<Position[]>(this.url + '/positions'); 
    };

   getPosition(id): Observable<Position[]> {
    let urlid = id;
    return this.http.get<Position[]>(this.url + '/position/' + urlid);
  };

  savePosition(position: Position): Observable<Position> {
    let body = JSON.stringify(position);
    let id = position._id;
    return this.http.put<Position>(this.url + '/position/' + id, body);
  };

}
