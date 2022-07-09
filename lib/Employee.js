// employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // functions to return data from class
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.name;
    }
    getRole(){
        return 'Employee';
    }
}
module.exports = Employee;