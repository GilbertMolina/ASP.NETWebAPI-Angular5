CREATE TABLE Employees
(
	Id INT IDENTITY(1,1),
	FirstName VARCHAR(50),
	LastName VARCHAR(50),
	Code VARCHAR(50),
	Position VARCHAR(50),
	Office VARCHAR(50),
	CONSTRAINT PK_Employees_Id
		PRIMARY KEY (Id)
);