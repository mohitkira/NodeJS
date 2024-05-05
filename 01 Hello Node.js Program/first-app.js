const fs = require('fs');
fs.writeFileSync('hello.txt','this is for testing');

let person = {
    name:'MOhit',
    job:'Software Engineer',
    Skills:['Java','AEM','Spring']
};

console.log(person);

let personCopy = {...person};
person.name = 'Mohit';
person.Skills.push('Node.js');
console.log(personCopy);