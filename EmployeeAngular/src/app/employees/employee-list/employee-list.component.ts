import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import Employee from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, employee);
  }

  deleteEmployee(id: number) {
    const answer = confirm('Are you sure that want to delete the employee?');

    if (answer) {
      this.employeeService.deleteEmployee(id)
        .subscribe(data => {
          this.employeeService.getEmployees();
          this.toastr.warning('The employee was deleted sucessfully', 'Employee Deleted');
        });
    }
  }

}
