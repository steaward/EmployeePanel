import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EmployeeRaw } from './employeeRaw';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>("https://teams-api-web422.herokuapp.com/employees");
    }

    getEmployee(id: string): Observable<EmployeeRaw[]> {  
        return this.http.get<EmployeeRaw[]>("https://teams-api-web422.herokuapp.com/employee-raw/" + id);
    }

    saveEmployee(employee: EmployeeRaw): Observable<any> {  
        return this.http.put<any>("https://teams-api-web422.herokuapp.com/employee/" + employee._id, employee);
    }

}