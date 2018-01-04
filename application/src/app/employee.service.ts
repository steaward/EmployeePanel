import { Injectable } from '@angular/core';
import { Employee } from './data/employee';
import { EmployeeRaw } from './data/employeeRaw'
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class EmployeeService {
  private url = "https://teams-api-web422.herokuapp.com"

  constructor( private http: HttpClient ) { }
  
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/employees');
  };

  getEmployee(id): Observable<EmployeeRaw[]> {
    let urlid = id;
    return this.http.get<EmployeeRaw[]>(this.url + '/employee-raw/' + urlid);
  }

  saveEmployee(employee: EmployeeRaw): Observable<EmployeeRaw> {
    let body = JSON.stringify(employee);
    let id = employee._id;
    return this.http.put<EmployeeRaw>( this.url + '/employee/' + id, body);
  }
  
}
