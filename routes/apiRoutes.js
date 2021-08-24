const router = require('express').Router();
const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

//Helper functions
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

  //Will get the routes to notes and read the file 
  router.get('/api/notes', (req, res) => {
      readFromFile('./db/db.json').then((data) => {
          res.json(JSON.parse(data))
      })
      .catch((err) => {
          res.json(err)
      })
  });
  //Post the newly entered notes
  router.post('/api/notes', (req, res) => {
      readFromFile('./db/db.json').then((data) => {
          const oldNotes = JSON.parse(data)
          const { title, text } = req.body;

          //Creating new notes with the title, text, and note_id to add to saved notes
            const newNotes = {
              ttile,
              text,
              note_id: uuid(),
            };
            //add new note to old notes
            readAndAppend(newNotes, './db/api/notes');
            res.json(`New note added!`);
         
            //then write the file with updated newNotes
            (newFeedback, './db/feedback.json');
        })
            .catch((err) => {
                res.json(err)
            })
        })



module.exports = router;