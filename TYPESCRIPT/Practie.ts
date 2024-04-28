class Student {
    private name: string;
    private department: string;
    private age: number;
    private gender: string;

    constructor(name: string, department: string, age: number, gender: string) {
        this.name = name;
        this.department = department;
        this.age = age;
        this.gender = gender;
    }

    // accessing methods
    getName(): string {
        return this.name;
    }
    getDepartment(): string {
        return this.department;
    }
    getAge(): number {
        return this.age;
    }
    getGender(): string {
        return this.gender;
    }

    // Updating methods
    setName(newName: string): void {
        this.name = newName;
    }
    setDepartment(newDepartment: string): void {
        this.department = newDepartment;
    }
    setAge(newAge: number): void {
        this.age = newAge;
    }
    setGender(newGender: string): void {
        this.gender = newGender;
    }

    // Function to update student details
    updateStudentDetails(updatedName: string, updatedDepartment: string, updatedAge: number, updatedGender: string): void {
        this.setName(updatedName);
        this.setDepartment(updatedDepartment);
        this.setAge(updatedAge);
        this.setGender(updatedGender);
    }
}


const student1 = new Student("Hubey", "ECE", 21, "male");
console.log("Original student details:");
console.log("Name:", student1.getName());
console.log("Department:", student1.getDepartment());
console.log("Age:", student1.getAge());
console.log("Gender:", student1.getGender());


student1.updateStudentDetails("Hubert Veyannie", "Electronics and communication engineering", 21, "Male");
console.log("\nUpdated student details:");
console.log("Name:", student1.getName());
console.log("Department:", student1.getDepartment());
console.log("Age:", student1.getAge());
console.log("Gender:", student1.getGender());
