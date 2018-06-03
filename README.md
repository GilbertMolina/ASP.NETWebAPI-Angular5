# ASP.NET-WebAPI-Angular5
ASP.NET WebAPI consumed from an Angular 5 app.

Instructions to run the application.

1- Go to the root of the Angular application and execute the following to install the packages:
- npm install

2- Publish the database project.

3- Execute the WebAPI in Visual Studio to access the WebAPI Actions, and copy the port where it was executed.

4- Modify the WebAPI port with the current URL in the Angular application, this is done in the following file:
- src / app / employees / shared / employee.service

5- Go to the root of the Angular application and execute the following command:
- ng serve