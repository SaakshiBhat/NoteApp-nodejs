// const { demandOption, string } = require('yargs');
// const yargs = require('yargs');

// yargs.command({
//     command : 'add',
//     describe : ' Add Note',
//     builder :{
//         title : {
//             describe : 'Title of Note',
//             demandOption : true,
//             type : string,
//         },
//         body : {
//             describe : "Body of Note",
//             demandOption : true,
//             type : string,
//         }
//     },
//     handler: function(argv){
//         console.log("Title: " + argv.title);
//         console.log("Body: " + argv.body);
//     }
    
// });
// yargs.parse();


const yargs = require('yargs');
const notes = require('./notes.js');

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

//console.log(title,body,command);

if (command === 'add'){
    console.log("Adding Note");
    notes.addnote(title , body);
}else if(command === "remove"){
    console.log("Removing Note");
    notes.removenote(title);
}else if(command === 'read'){
    console.log("Reading Note");
    notes.readnote(title);
}else if(command === "list"){
    console.log("List");
    notes.listall();
}