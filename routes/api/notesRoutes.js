const router = require('express').Router();
const db = require('../../db/db.json');
const fs = require('fs');

router.get('/', (req, res) => {
    res.json(db);
});

router.post('/', (req, res) => {
    const { title,  text } = req.body;
    const newNote = {
        title,
        text,
        id: db.length + 1
    };
    db.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), (err) => {
        err
            ? console.log(err)
            : console.log(`note posted`);
    });
    res.json('request completed successfully');
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    for (let i = 0; i < db.length; i++) {
        if (i + 1 === db[i].id) {
            db.splice(i, 1);
        }
    }

    fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), (err) => {
        err
            ? console.log(err)
            : console.log(`note deleted`);
    });

    res.json('note successfully deleted')
})

module.exports = router;