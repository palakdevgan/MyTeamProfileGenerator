const Engineer=require('../lib/Engineer');

test('creates a engineer object',() =>{
const engineer = new Engineer('Dave',1,'dave@gmail.com','davem');
    
expect(engineer.name).toBe('Dave');
expect(engineer.id).toBe(1);
expect(engineer.email).toBe('dave@gmail.com');
expect(engineer.github).toBe('davem');
});

test("get's engineer's name",() =>{
const engineer = new Engineer('Dave',1,'dave@gmail.com','davem');
expect(engineer.getName()).toBe('Dave');
});
        
test("get's engineer's id",() =>{
const engineer = new Engineer('Dave',1,'dave@gmail.com','davem');
expect(engineer.getId()).toBe(1);
});
        
test("get's engineer's email",() =>{
const engineer = new Engineer('Dave',1,'dave@gmail.com','davem');
expect(engineer.getEmail()).toBe('dave@gmail.com');
});

test("get's engineer's github username",() =>{
const engineer = new Engineer('Dave',1,'dave@gmail.com','davem');
expect(engineer.getGithub()).toBe('davem');
});
        
test("get's engineer's role",() =>{
const engineer = new Engineer('Dave',1,'dave@gmail.com','davem');
expect(engineer.getRole()).toBe('Engineer');
});
