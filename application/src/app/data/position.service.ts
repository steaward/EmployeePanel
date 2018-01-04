import { Injectable } from '@angular/core';
import { Position } from './position';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PositionService {

  constructor(private http: HttpClient) { }

  getPositions() : Observable<Position[]>{
    return this.http.get<Position[]>("https://teams-api-web422.herokuapp.com/positions");
  }

  getPosition(id) : Observable<Position[]>{
    return this.http.get<Position[]>("https://teams-api-web422.herokuapp.com/position/" + id);
  }

  savePosition(position: Position): Observable<any> {  
    return this.http.put<any>("https://teams-api-web422.herokuapp.com/position/" + position._id, position);
}
  
}
