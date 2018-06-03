import { Injectable } from '@angular/core';
import Employee from './employee.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  portAPI = '49813';
  APIUrl = `http://localhost:${this.portAPI}/api/employees/`;
  employeeList: Employee[];

  constructor(private http: Http) { }

  getEmployees() {
    this.http.get(this.APIUrl)
      .map((res: Response) => {
        return res.json() as Employee[];
      }).toPromise().then(data => {
        this.employeeList = data;
      });
  }

  postEmployee(employee: Employee) {
    const body = JSON.stringify(employee);
    const headerOptions = new Headers({'Content-Type' : 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});

    return this.http.post(this.APIUrl, body, requestOptions)
      .map(res => res.json());
  }

  putEmployee(id: number, employee: Employee) {
    const body = JSON.stringify(employee);
    const headerOptions = new Headers({'Content-Type' : 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});

    return this.http.put(this.APIUrl + id, body, requestOptions)
      .map(res => res.json());
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.APIUrl + id)
      .map(res => res.json());
  }

}
