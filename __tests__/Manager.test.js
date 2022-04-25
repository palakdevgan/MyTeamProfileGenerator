const Manager=require('../lib/Manager');

test('creates a manager object',() =>{
const manager = new Manager('Dave',1,'dave@gmail.com',1);
    
expect(manager.name).toBe('Dave');
expect(manager.id).toBe(1);
expect(manager.email).toBe('dave@gmail.com');
expect(manager.officeNumber).toBe(1);
});

test("get's manager's name",() =>{
const manager = new Manager('Dave',1,'dave@gmail.com',1);
expect(manager.getName()).toBe('Dave');
});
        
test("get's manager's id",() =>{
const manager = new Manager('Dave',1,'dave@gmail.com',1);
expect(manager.getId()).toBe(1);
});
        
test("get's manager's email",() =>{
const manager = new Manager('Dave',1,'dave@gmail.com',1);
expect(manager.getEmail()).toBe('dave@gmail.com');
});
        
test("get's manager's role",() =>{
const manager = new Manager('Dave',1,'dave@gmail.com',1);
expect(manager.getRole()).toBe('Manager');
});
