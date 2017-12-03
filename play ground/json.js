// var obj = {
//     name: 'alaa'
// };

// var stringobj = JSON.stringify(obj);
// console.log(typeof stringobj);
// console.log(stringobj);

// var person = '{"name": "alaa","age": 21}';
// var convert = JSON.parse(person);
// console.log(typeof convert)
// console.log(convert);

const fs = require("fs");

var origenalNote = {
    title: 'Spring boot',
    body: 'learn spring boot'
};

var origenalNoteString = JSON.stringify(origenalNote);
fs.writeFileSync('note.json', origenalNoteString);
var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);