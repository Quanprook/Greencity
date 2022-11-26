const express = require("express");
const router = express.Router();

const {
    initializeApp
} = require("firebase/app");

const {
    getDatabase,
    ref,
    set,
} = require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyB5w-9oEa--nxLUnrJqCWdDPuflNaPJ2wU",
    authDomain: "example1-16a7b.firebaseapp.com",
    projectId: "example1-16a7b",
    storageBucket: "example1-16a7b.appspot.com",
    messagingSenderId: "133160300996",
    appId: "1:133160300996:web:4eb2b8d57984c8f08bb491",
    measurementId: "G-ETDY17DKJP",
    databaseURL: "https://example1-16a7b-default-rtdb.firebaseio.com/",
};

const database = getDatabase(initializeApp(firebaseConfig));

router.post('/register', function (req, res) {
    const email = req.body.email;
    const fullName = req.body.fullname;

    const mailName = email.split('@')[0];

    if (!email || !fullName) {
        res.status(404);
    } else {
        set(ref(database, 'users/' + mailName), {
            mail: email,
            name: fullName,
        });
        res.redirect('/');
    }
})

module.exports = router;