
const Employee = require('../lib/Employee')

describe("test on Employee Costructor", () => {

    test("test properties", () => {

        const employee = new Employee("Mike", 3244, "mike@work.com")
        expect(employee.name).toBe("Mike");
        expect(employee.id).toBe(3244);
        expect(employee.email).toBe("mike@work.com");

    })

    test("test get functions", () => {

        const employee = new Employee('Henry', 1233, "henry@work.com")
        expect(employee.getName()).toBe('Henry');
        expect(employee.getId()).toBe(1233);
        expect(employee.getEmail()).toBe("henry@worker.com")
    })

})