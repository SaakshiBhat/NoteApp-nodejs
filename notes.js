

const fs = require('fs');
const chalk = require('chalk');


function fetch(){
   // console.log("Length: " + fs.readFileSync('notepad.txt').length );
   
   if( fs.readFileSync('notepad.txt').length >0){
        return JSON.parse(fs.readFileSync('notepad.txt'));
   }
   else{
       return [];
   }
}

function addnote(title,body){

    allnotes = fetch();
    var note = {
        title ,body
    }
    allnotes.push(note);
    fs.writeFileSync('notepad.txt' ,JSON.stringify(allnotes));
    readit(note);
}

function removenote(title){
    allnotes = fetch();

    notes = allnotes.filter((note) => note.title !== title);

    fs.writeFileSync('notepad.txt', JSON.stringify(notes));
}

function readnote(title){
    allnotes = fetch();
    mynote = allnotes.filter((note) => note.title === title);
    readit(mynote[0]);
}

function listall(){
    allnotes = fetch();
    allnotes.forEach(note => readit(note));


}
function readit(file){
    console.log("--------------------------");
    console.log(chalk.blue("Title: ") + chalk.red(file.title));
    console.log(chalk.blue("Body: ") + chalk.gray(file.body));
    console.log("--------------------------");
}

module.exports = {
    addnote,
    removenote,
    readnote,
    listall
}