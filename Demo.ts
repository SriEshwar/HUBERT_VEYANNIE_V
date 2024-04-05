class Employee{
    empId:number=0
    empName:string=''

    constructor(empId:number, empName:string){
        this.empId=empId
        this.empName=empName
    }
}

class Manager extends Employee{
    constructor(empId:number, empName:string){
        super(empId,empName)
    }
}
let manager = new Manager(18, 'Hubert')
console.log(manager);