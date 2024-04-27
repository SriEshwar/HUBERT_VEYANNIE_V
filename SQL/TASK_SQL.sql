create table Programmer(
programmer_name varchar(20) not null,
dob date not null,
doj date not null,
sex varchar(1) not null,
prof1 varchar(8),
prof2 varchar(8),
salary bigint not null
);

INSERT INTO Programmer (programmer_Name, dob, doj, sex, prof1, prof2, salary) VALUES
('Rahul', '1990-05-15', '2015-07-01', 'M', 'Pascal', 'Basic', 50000.00),
('Priya', '1988-10-22', '2016-02-10', 'F', 'C', 'Pascal', 5000.00),
('Amit Singh', '1992-03-07', '2014-09-05', 'M', 'Oracle', 'C', 60000.00),
('Deepika Gupta', '1995-12-18', '2017-01-20', 'F', 'Cobol', 'C++', 48000.00),
('Rajesh Kumar', '1985-08-30', '2013-05-10', 'M', 'C++', 'Dbase', 70000.00),
('Sneha', '1993-07-25', '2018-04-12', 'F', 'Cobol', 'Basic', 65000.00),
('Vikram Singh', '1991-11-05', '2015-09-15', 'M', 'Clipper', 'Clipper', 53000.00),
('Nikitha', '1989-06-12', '2016-06-30', 'F', 'C', 'Dbase', 62000.00),
('Ankit Patel', '1994-01-20', '2019-03-05', 'M', 'Clipper', 'C++', 8000.00),
('Kavita', '1990-09-08', '2014-08-25', 'F', 'Basicl', 'Cobol', 56000.00),
('Arun Kumar', '1987-02-14', '2017-07-18', 'M', 'Dbase', 'Basic', 59000.00),
('Pooja', '1996-01-30', '2018-10-10', 'F', 'Oracle', 'C', 61000.00),
('Mohit Gupta', '1992-06-05', '2015-12-20', 'M', 'C++', 'Oracle', 54000.00),
('Shalini', '1988-04-12', '2016-11-15', 'F', 'Dbase', 'Pascal', 6000.00),
('Ramesh Kumar', '1993-10-01', '2019-05-25', 'M', 'Pascal', 'Oracle', 67000.00);
select * from programmer;

create table Software(
software_name varchar(8) not null,
title varchar(20) not null,
dev_in varchar(8) not null,
scost decimal(7,2),
dcost int,
sold int 
);
INSERT INTO Software (software_Name, title, dev_in, scost, dcost, sold) VALUES
('Somdutt', 'Parachutes', 'Basic', 399.95, 6000, 43),
('Ramesh', 'AeroFly', 'C++', 499.99, 7500, 57),
('Suresh', 'SkySail', 'Pascal', 299.99, 5500, 30),
('Meera', 'CloudRunner', 'Python', 599.95, 8000, 25),
('Aarav', 'SpaceCraft', 'Basic', 349.99, 7000, 39),
('Priya', 'SkySail', 'Clipper', 249.95, 4500, 20),
('Rahul', 'CloudRunner', 'C#', 449.99, 6500, 35),
('Kavita', 'AeroFly', 'PHP', 399.95, 6000, 43),
('Amit', 'Parachutes', 'Cobol', 549.99, 8500, 28),
('Anushka', 'SpaceCraft', 'Kotlin', 299.95, 5000, 38);
select * from software;

create table studies(
studies_name varchar(20) not null,
splace varchar(20) not null,
course varchar(20) not null,
ccost decimal(10,2) not null
);

INSERT INTO Studies (studies_Name, splace, course, ccost) VALUES
('Somdutt', 'Sabhari', 'PGDCA', 4500.00),
('Devdutt', 'BDPS', 'DCS', 5000.00),
('Rahul', 'XYZ Institute', 'MBA', 12000.00),
('Priya', 'ABC College', 'B.Tech', 8000.00),
('Amit', 'DEF University', 'MCA', 6000.00),
('Suresh', 'SECE', 'DCS', 3000.00),
('Meera', 'JKL Academy', 'B.Sc', 7000.00),
('Kavita', 'SSIL','PGDCA',500.00),
('Ankit', 'PQR College', 'M.Tech', 10000.00),
('Neha', 'STU University', 'PGDCA', 15000.00);

/*Query - I*/

select avg(scost) from software where dev_in = 'pascal';
SELECT programmer_Name, TIMESTAMPDIFF(YEAR, DOB, CURDATE()) AS Age FROM Programmer;
select p.programmer_name, timestampdiff(year, p.dob, curdate()) as age from programmer p
join studies s on p.programmer_name = s.studies_name where course = 'dcs';
select max(scost) from software;
select programmer_name, dob from programmer where month(dob) = 1; 
select min(ccost) from studies;
select count(*) from studies where course = 'pgdca';
SELECT SUM(scost) AS RevenueEarned FROM Software WHERE dev_in = 'C';
SELECT * FROM Software WHERE software_Name = 'Ramesh';
SELECT COUNT(*) AS NumberOfProgrammers FROM Studies WHERE splace = 'SABHARI';
SELECT * FROM Software WHERE scost > 20000;
SELECT Title, CEIL(dcost /scost) AS CopiesToBeSold FROM Software;
SELECT MAX(scost) AS CostliestSoftwarePrice FROM Software WHERE dev_in = 'BASIC';
SELECT * FROM Software WHERE scost * scost >= dcost;
SELECT COUNT(*) AS NumberOfPackages FROM Software WHERE dev_in = 'dbase';
SELECT COUNT(*) AS NumberOfProgrammers FROM Studies WHERE Splace = 'paragathi';
SELECT COUNT(*) AS NumberOfProgrammers FROM Studies 
WHERE CAST(REPLACE(ccost, ',', '') AS UNSIGNED) BETWEEN 5000 AND 10000;
SELECT AVG(CAST(REPLACE(ccost, ',', '') AS DECIMAL)) AS AverageCourseFee FROM Studies;
SELECT * FROM Programmer WHERE Prof1 = 'c' OR Prof2 = 'c';
SELECT COUNT(*) AS NumberOfProgrammers FROM Programmer
WHERE Prof1 IN ('Cobol', 'Pascal') OR Prof2 IN ('Cobol', 'Pascal');
SELECT COUNT(*) AS NumberOfProgrammers FROM Programmer
WHERE Prof1 NOT IN ('Pascal', 'C') AND Prof2 NOT IN ('Pascal', 'C');
SELECT MAX(TIMESTAMPDIFF(YEAR, DOB, CURDATE())) AS OldestMaleAge FROM Programmer WHERE Sex = 'M';
SELECT AVG(TIMESTAMPDIFF(YEAR, DOB, CURDATE())) AS AverageFemaleAge FROM Programmer WHERE Sex = 'F';
SELECT programmer_Name, TIMESTAMPDIFF(YEAR, DOB, CURDATE()) AS Experience FROM Programmer ORDER BY Experience DESC;
SELECT programmer_name FROM Programmer WHERE MONTH(DOB) = MONTH(CURDATE());
SELECT COUNT(*) AS NumberOfFemaleProgrammers FROM Programmer WHERE Sex = 'F';
SELECT DISTINCT Prof1, Prof2 FROM Programmer WHERE Sex = 'M';
SELECT AVG(Salary) AS AverageSalary FROM Programmer;
SELECT COUNT(*) AS NumberOfPeople FROM Programmer WHERE Salary BETWEEN 2000 AND 4000;
SELECT * FROM Programmer
WHERE Prof1 NOT IN ('Clipper', 'Cobol', 'Pascal') AND Prof2 NOT IN ('Clipper', 'Cobol', 'Pascal');
SELECT COUNT(*) AS NumberOfFemaleProgrammers FROM Programmer
WHERE Sex = 'F' AND Prof1 = 'C' AND TIMESTAMPDIFF(YEAR, DOB, CURDATE()) > 24;
SELECT programmer_name FROM Programmer
WHERE DAYOFYEAR(DATE_ADD(DOB, INTERVAL YEAR(CURDATE()) - YEAR(DOB) YEAR)) - DAYOFYEAR(CURDATE()) BETWEEN 1 AND 7;
SELECT * FROM Programmer WHERE TIMESTAMPDIFF(YEAR, DOB, CURDATE()) < 1;
SELECT * FROM Programmer WHERE TIMESTAMPDIFF(YEAR, DOJ, CURDATE()) = 2;
SELECT SUM(DCost - (scost * scost)) AS AmountToBeRecovered
FROM Software WHERE (Scost * scost) < dcost;
SELECT * FROM Software WHERE scost = 0;
SELECT SUM(scost) AS TotalCostDevelopedByMary FROM Software WHERE software_name = 'Mary';
SELECT DISTINCT Splace FROM Studies;
SELECT COUNT(DISTINCT Course) AS NumberOfCourses FROM Studies;
SELECT programmer_name FROM Programmer WHERE LENGTH(programmer_Name) - LENGTH(REPLACE(programmer_Name, 'a', '')) = 2;
SELECT programmer_name FROM Programmer WHERE LENGTH(programmer_Name) <= 5;
SELECT COUNT(*) AS FemaleProgrammersWithExperience FROM Programmer
WHERE Sex = 'F' AND (Prof1 = 'COBOL' OR Prof2 = 'COBOL') AND TIMESTAMPDIFF(YEAR, DOB, CURDATE()) > 2;
SELECT MIN(LENGTH(programmer_Name)) AS ShortestNameLength FROM Programmer;
SELECT AVG(dcost) AS AverageDevelopmentCostCOBOL FROM Software WHERE dev_in = 'COBOL';
SELECT programmer_name, Sex, DATE_FORMAT(DOB, '%d/%m/%y') AS DOB, DATE_FORMAT(DOJ, '%d/%m/%y') AS DOJ FROM Programmer;
SELECT programmer_Name FROM Programmer WHERE DAY(LAST_DAY(DOB)) = DAY(DOB);
SELECT SUM(Salary) AS TotalSalaryPaid FROM Programmer WHERE Sex = 'M' AND NOT (Prof1 = 'Cobol' OR Prof2 = 'Cobol');
SELECT programmer_Name, DOB, DOJ FROM Programmer WHERE MONTH(DOB) = MONTH(DOJ);
SELECT Title FROM Software WHERE Title LIKE '% %';


/*Query - II*/

select title as language, count(*) as num_packages from software group by title;
select software_name, count(*) as num_packages from software group by software_name;
select sex, count(*) as num_programmers from programmer group by sex;
select extract(year from dob) as birth_year, count(*) as num_people from programmer 
group by extract(year from dob) order by birth_year;
SELECT EXTRACT(YEAR FROM doj) AS join_year, COUNT(*) AS num_people_joined FROM
Programmer GROUP BY EXTRACT(YEAR FROM doj) ORDER BY join_year;
SELECT EXTRACT(month FROM dob) AS birth_month, COUNT(*) AS num_people_born
FROM Programmer GROUP BY EXTRACT(month FROM dob) ORDER BY birth_month;
SELECT EXTRACT(month FROM doj) AS join_month, COUNT(*) AS num_people_joined
FROM Programmer GROUP BY EXTRACT(month FROM doj) ORDER BY join_month;
SELECT prof1 AS language, COUNT(*) AS count_of_prof1 FROM Programmer GROUP BY prof1;
SELECT prof2 AS language, COUNT(*) AS count_of_prof2 FROM Programmer GROUP BY prof2;
SELECT salary, COUNT(*) AS num_of_people FROM programmer GROUP BY salary;
SELECT splace AS institute, COUNT(*) AS num_people FROM Studies GROUP BY splace;
SELECT course ,COUNT(*) AS num_people FROM Studies GROUP BY course;
SELECT dev_in AS language, SUM(dcost) AS total_development_cost FROM Software GROUP BY dev_in;
SELECT dev_in AS language, SUM(scost) AS total_selling_cost FROM Software GROUP BY dev_in;
SELECT software_name, COUNT(*) AS num_packages_developed FROM Software GROUP BY software_name;
select dev_in, avg(dcost), avg(scost), avg(scost/sold) from software group by dev_in;
SELECT splace AS institute_name, COUNT(*) AS num_courses, AVG(ccost) AS avg_cost_per_course
FROM Studies GROUP BY splace;
SELECT splace AS institute_name, COUNT(*) AS num_students FROM Studies GROUP BY splace;
SELECT programmer_name,sex FROM Programmer WHERE sex = 'm' or sex='f';
select programmer_name, salary from programmer;
SELECT dev_in AS language, COUNT(*) AS num_packages FROM Software GROUP BY dev_in;
SELECT dev_in AS language, COUNT(*) AS num_packages FROM Softwares where dcost<1000 GROUP BY dev_in;
SELECT dev_in AS language, AVG(scost - dcost) AS avg_cost_difference FROM Software GROUP BY dev_in;
SELECT MAX(salary) AS highest_salary, MIN(salary) AS lowest_salary, AVG(salary) AS average_salary
FROM Programmer WHERE salary > 2000;

/*QUERY - III*/

select programmer_name, salary from programmer where prof1 = 'c' or prof2 = 'c' order by salary desc limit 1;
select programmer_name, salary from programmer where sex = 'F' and (prof1 = 'cobol' or prof2 = 'cobol') order by salary desc limit 1;
SELECT P.programmer_name, P.Prof1, P.Salary FROM Programmer P
JOIN (SELECT Prof1, MAX(Salary) AS MaxSalary FROM Programmer GROUP BY Prof1)
AS MaxSalaries ON P.Prof1 = MaxSalaries.Prof1 AND P.Salary = MaxSalaries.MaxSalary;
select programmer_name, TIMESTAMPDIFF(YEAR, DOB, CURDATE()) as Experience from Programmer order by Experience limit 1;
select programmer_name, TIMESTAMPDIFF(YEAR, DOB, CURDATE()) as Experience from Programmer order by Experience desc limit 1;
select programmer_name, Prof1 as Language from Programmer group by programmer_name, Prof1 having count(*) = 1
union
select programmer_name, Prof2 as Language from Programmer group by programmer_name, Prof2 having count(*) = 1;
select programmer_name, timestampdiff(year, dob, curdate()) as experience from programmer where prof1='dbase' or prof2='dbase' order by experience limit 1;
select splace as Institute, count(*) as StudentCount from Studies group by splace order by StudentCount desc limit 1;
SELECT programmer_name FROM programmer WHERE Sex = 'f' AND Salary > 3000
AND (Prof1 NOT IN ('C', 'C++', 'Oracle', 'Dbase')
OR Prof2 NOT IN ('C', 'C++', 'Oracle', 'Dbase'));
select Course,max(ccost) Costiest_course from Studies group by course order by Costiest_course desc limit 1;
select course, count(course) Course_count from Studies group by course order by Course_count desc limit 1;
select splace as institute, Course from Studies where ccost < (select avg(ccost) from Studies);
SELECT DISTINCT splace FROM Studies WHERE Course IN (
SELECT Course FROM Studies GROUP BY Course
HAVING COUNT(*) < (SELECT AVG(StudentCount) FROM (SELECT COUNT(*) AS StudentCount FROM Studies GROUP BY Course) AS AvgStudentCount));
SELECT Course FROM Studies GROUP BY Course HAVING COUNT(*) < (SELECT AVG(StudentCount) FROM
(SELECT COUNT(*) AS StudentCount FROM Studies GROUP BY Course) AS AvgStudentCount);
select Course from Studies where abs(ccost - (select avg(ccost) from Studies)) <= 1000;
SELECT Title AS package FROM Software WHERE dcost = (SELECT MAX(dcost) FROM Software);
SELECT Title AS package FROM Software WHERE dcost = (SELECT Min(dcost) FROM Software);
SELECT programmer_name FROM Programmer WHERE programmer_name IN (
SELECT software_name FROM Software
WHERE scost = (SELECT MIN(scost) FROM Software));
SELECT dev_in FROM Software WHERE scost = (SELECT MAX(scost) FROM Software);
SELECT scost FROM Software WHERE ABS(scost - dcost) = (
SELECT MIN(ABS(scost - dcost)) FROM Software);
select Title from Software where dev_in = 'Pascal' order by scost limit 1;
SELECT dev_in FROM Software GROUP BY dev_in ORDER BY COUNT(*) DESC LIMIT 1;
SELECT programmer_name FROM Programmer WHERE programmer_name IN (
SELECT software_name FROM Software GROUP BY software_name ORDER BY COUNT(*) DESC limit 1);
SELECT Title FROM Software WHERE scost < (SELECT AVG(scost) FROM Software);
SELECT programmer_name FROM Programmer WHERE Sex = 'F' AND Salary > (SELECT MAX(Salary) FROM Programmer WHERE Sex = 'M');
SELECT Prof1 FROM Programmer GROUP BY Prof1 ORDER BY COUNT(*) DESC LIMIT 1;
select distinct software_name from software where scost> 2*dcost;
SELECT programmer_name FROM Programmer WHERE Sex = 'M' AND DOB = (SELECT MIN(DOB) FROM Programmer WHERE Sex = 'M' AND YEAR(DOB) = 1965);
SELECT programmer_name FROM Programmer WHERE Sex = 'F' AND DOJ = (SELECT MIN(DOJ) FROM Programmer WHERE Sex = 'F' AND YEAR(DOJ) = 1992);
SELECT YEAR(DOB) AS BirthYear, COUNT(*) AS ProgrammerCount FROM Programmer GROUP BY YEAR(DOB) ORDER BY ProgrammerCount DESC LIMIT 1;
SELECT YEAR(DOJ) AS JoinYear, COUNT(*) AS ProgrammerCount FROM Programmer GROUP BY YEAR(DOJ) ORDER BY ProgrammerCount DESC LIMIT 1;
SELECT Prof1 AS Language, COUNT(*) AS ProgrammerCount FROM Programmer GROUP BY Prof1 ORDER BY ProgrammerCount DESC LIMIT 1;
SELECT programmer_name FROM Programmer WHERE Sex = 'M' AND Salary < (SELECT AVG(Salary) FROM Programmer WHERE Sex = 'F');

/* QUERY - IV */

SELECT * FROM Programmer
WHERE Salary IN (SELECT Salary FROM Programmer GROUP BY Salary HAVING COUNT(*) > 1);
SELECT * FROM Software
WHERE software_name IN (SELECT software_name FROM Programmer WHERE Sex = 'M' AND Salary > 3000);
SELECT * FROM Software
WHERE dev_in = 'PASCAL' AND software_name IN (SELECT programmer_Name FROM Programmer WHERE Sex = 'F');
SELECT S.* FROM Software S JOIN Programmer P ON S.software_name = P.programmer_name
WHERE S.dev_in = 'C' AND P.Sex = 'F'
AND P.programmer_name IN (SELECT studies_name FROM Studies WHERE splace = 'PRAGATHI');
SELECT s.* FROM Software s
JOIN Programmer p ON s.software_name = p.programmer_name
JOIN Studies st ON p.programmer_name = st.studies_name
WHERE (p.Sex = 'M' AND p.DOB < '1965-01-01') OR (p.Sex = 'F' AND p.DOB > '1975-12-31');
SELECT s.* FROM Software s
JOIN Programmer p ON s.software_name = p.programmer_name
WHERE s.dev_in NOT IN (p.Prof1, p.Prof2);
SELECT s.* FROM Software s JOIN Programmer p ON s.software_name = p.programmer_name
WHERE s.dev_in NOT IN (p.Prof1, p.Prof2) AND s.dev_in NOT IN (p.Prof2, p.Prof1);
SELECT s.* FROM Software s
JOIN Studies st ON s.software_name = st.studies_name
WHERE st.splace = 'Sabhari' AND st.studies_name IN (SELECT programmer_name FROM Programmer WHERE Sex = 'M');
SELECT programmer_name FROM Programmer WHERE programmer_name NOT IN (SELECT DISTINCT software_name FROM Software);
SELECT SUM(scost) AS TotalCost FROM Software
WHERE software_name IN (SELECT programmer_name FROM Programmer WHERE Prof1 = 'APPLE' OR Prof2 = 'APPLE');
SELECT A.programmer_name, B.programmer_name FROM Programmer A
JOIN Programmer B ON A.programmer_name != B.programmer_name AND A.DOJ = B.DOJ;
SELECT Prof2 FROM Programmer GROUP BY Prof2 HAVING COUNT(*) > 1;
SELECT T.splace AS Institute, SUM(S.scost * S.sold) AS TotalSalesValue
FROM Software S JOIN Studies T ON S.software_name = T.studies_Name GROUP BY T.Splace;
SELECT P.programmer_name, P.Salary, S.Course
FROM Programmer P JOIN Studies S ON P.programmer_name = S.studies_name
WHERE P.programmer_name = (SELECT software_name FROM Software
WHERE sold = (SELECT MAX(sold) FROM Software));
SELECT Programmer.programmer_name, ccost / (Salary / 12) AS MonthsToRecover
FROM Programmer JOIN Studies ON Programmer.programmer_name = Studies.studies_name;
SELECT Title AS CostliestPackage FROM Software
WHERE dcost = (SELECT MAX(dcost) FROM Software
WHERE software_name IN (SELECT programmer_name FROM Programmer
WHERE TIMESTAMPDIFF(YEAR, DOB, CURDATE()) < 3));
SELECT AVG(Salary) AS AverageSalary FROM Programmer
WHERE programmer_name IN (SELECT software_name FROM Software WHERE Scost * Sold > 50000);
SELECT COUNT(*) AS NumberOfPackages FROM Software
WHERE software_name IN (SELECT studies_name FROM Studies WHERE Splace = (
SELECT Splace FROM Studies ORDER BY ccost ASC LIMIT 1));
SELECT COUNT(*) AS NumberOfPackages FROM Software
WHERE software_Name IN ( SELECT programmer_Name FROM Programmer WHERE Sex = 'F' AND Salary > 
(SELECT MAX(Salary) FROM Programmer WHERE Sex = 'M'));
SELECT COUNT(*) AS NumberOfPackages FROM Software
WHERE software_name IN ( SELECT programmer_name FROM Programmer WHERE DOJ = (
SELECT MAX(DOJ) FROM Programmer WHERE programmer_name IN (SELECT studies_name FROM Studies WHERE splace = 'BDPS' )));
SELECT P.programmer_name, S.Splace FROM Programmer P
LEFT JOIN Studies S ON P.programmer_name = S.studies_name;
SELECT Prof1 AS Proficiency, COUNT(*) AS NumberOfProgrammers,
(SELECT COUNT(*) FROM Software WHERE dev_in = Prof1) AS NumberOfPackages FROM Programmer GROUP BY Prof1;
SELECT programmer_name, (SELECT COUNT(*) FROM Software WHERE software_name = Programmer.programmer_name) AS NumberOfPackages FROM Programmer;
SELECT * FROM Programmer WHERE programmer_name IN (
SELECT studies_name FROM Studies WHERE Splace = 'S.S.I.L');