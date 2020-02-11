const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    }else{
        console.log('Note title taken!')
    }
};

const removeNotes = (title) => {
    const notes = loadNotes();
    const duplicateNotesRemove = notes.filter((note) => note.title !== title);

    if(notes.length > duplicateNotesRemove.length){
        saveNotes(duplicateNotesRemove);
        console.log(chalk.green.inverse('Note removed!'))
    }else{
        console.log(chalk.red.inverse('Note no found!'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes();
    const readN = notes.filter(e => e.title === title);

    if(readN.length === 0){
        console.log(chalk.red('Error!! Nothing founded!!'))
    }else{
        console.log(chalk.green(readN[0].title));
        console.log(chalk.green(readN[0].body));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes:'));
    notes.forEach(element => {
        console.log(element.title)
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e){
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};