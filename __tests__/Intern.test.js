const Intern=require('../lib/Intern');

test('creates a intern object',() =>{
const intern = new Intern('Dave',1,'dave@gmail.com','waterloo');
expect(typeof intern).toBe('object');
expect(intern.name).toBe('Dave');
expect(intern.id).toBe(1);
expect(intern.email).toBe('dave@gmail.com');
expect(intern.school).toBe('waterloo');
});

test("get's intern's name",() =>{
const intern = new Intern('Dave',1,'dave@gmail.com','waterloo');
expect(intern.getName()).toBe('Dave');
});
        
test("get's intern's id",() =>{
const intern = new Intern('Dave',1,'dave@gmail.com','waterloo');
expect(intern.getId()).toBe(1);
});
        
test("get's intern's email",() =>{
const intern = new Intern('Dave',1,'dave@gmail.com','waterloo');
expect(intern.getEmail()).toBe('dave@gmail.com');
});

test("get's intern's school",() =>{
const intern = new Intern('Dave',1,'dave@gmail.com','waterloo');
expect(intern.school).toBe('waterloo');
});
        
test("get's intern's role",() =>{
const intern = new Intern('Dave',1,'dave@gmail.com','waterloo');
expect(intern.getRole()).toBe('Intern');
});
