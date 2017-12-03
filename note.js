const fs = require('fs');

var fetchNotes = () => {
    try {
        let noteString = fs.readFileSync("note-data.json");
        return JSON.parse(noteString);

    } catch (e) {
        return [];
    }
};


var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
};



var addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    var doublicatNote = notes.filter((note) => note.title === title);
    if (doublicatNote.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }


};

var getAll = () => {
    return fetchNotes();
}

var readNote = (title) => {
    let notes = fetchNotes();
    let noteToBeRead = notes.filter((note) => note.title === title);
    return noteToBeRead[0];
}

var removeNote = (title) => {

    let notes = fetchNotes();
    let noteToBeSaved = notes.filter((note) => note.title != title);
    let saveNewNotes = saveNotes(noteToBeSaved);

    return notes.length != noteToBeSaved.length;
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
};