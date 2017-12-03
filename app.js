//const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./note');
const commandOptions = require('./commadOptions');


const argv = yargs.
command('add', 'add new note', {
        title: commandOptions.titleOption,
        body: commandOptions.bodyOption
    })
    .command('list', 'list all avilable notes')
    .command('read', 'read the note by given title', {
        title: commandOptions.titleOption,
    })
    .command('remove', 'remove note by given title', {
        title: commandOptions.titleOption
    })
    .help().argv;

let command = argv._[0];

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("note created");
        console.log("-----------")
        console.log(`Title: ${note.title}`);
    } else {
        console.log("title is taken");
    }
} else if (command == 'list') {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length}`);
    allNotes.forEach(note => {
        console.log(`Title: ${note.title} body: ${note.body} `);
    });
} else if (command == 'read') {
    var note = notes.readNote(argv.title);
    if (note)
        console.log(`Title: ${note.title} body: ${note.body}`);
    else
        console.log("can't read this note");
} else if (command == 'remove') {
    var notesTobeRemoved = notes.removeNote(argv.title);
    var message = notesTobeRemoved ? 'note remved success' : "can't remove this note";
    console.log(message);
} else {
    console.log("command note avilable");
}