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

// GET Route for retrieving all the tips
// app.get('/api/tips', (req, res) => {
//     console.info(`${req.method} request received for tips`);
//     readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
//   });

  router.get('/api/notes', (req, res) => {
      readFromFile('./db/db.json').then((data) => {
          res.json(JSON.parse(data))
      })
      .catch((err) => {
          res.json(err)
      })
  });

  router.post('/api/notes', (req, res) => {
      readFromFile('./db/db.json').then((data) => {
          const oldNotes = JSON.parse(data)
          const { title, text } = req.body;

          const newNotes = {
            ttile,
            text,
            note_id: uuid(),
          };
          //add new note to old notes
          //then write the file with updated newNotes
          (newFeedback, './db/feedback.json');
      })
          .catch((err) => {
              res.json(err)
          })
      })



module.exports = router;