const Employee=require('../lib/Employee');

test('creates a employee object',() =>{
const employee = new Employee('Dave',1,'dave@gmail.com');

expect(employee.name).toBe('Dave');
expect(employee.id).toBe(1);
expect(employee.email).toBe('dave@gmail.com');
});

test("get's employee's name",() =>{
const employee = new Employee('Dave',1,'dave@gmail.com');
expect(employee.getName()).toBe('Dave');
});

test("get's employee's id",() =>{
const employee = new Employee('Dave',1,'dave@gmail.com');
expect(employee.getId()).toBe(1);
});

test("get's employee's email",() =>{
const employee = new Employee('Dave',1,'dave@gmail.com');
expect(employee.getEmail()).toBe('dave@gmail.com');
});

test("get's employee's role",() =>{
const employee = new Employee('Dave',1,'dave@gmail.com');
expect(employee.getRole()).toBe('Employee');
});