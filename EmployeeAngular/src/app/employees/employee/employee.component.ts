import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }

    this.employeeService.selectedEmployee = {
      Id: null,
      FirstName: '',
      LastName: '',
      Code: '',
      Position: '',
      Office: ''
    };
  }

  submitForm(form: NgForm) {
    if (form.value.Id == null) {
      this.employeeService.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeService.getEmployees();
          this.toastr.success('The employee was added successfully.', 'Employee added');
        });
    } else {
      this.employeeService.putEmployee(form.value.Id, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeService.getEmployees();
          this.toastr.info('The employee was updated successfully', 'Employee Updated');
        });
    }
  }

}
