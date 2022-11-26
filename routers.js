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
    apiKey: "AIzaSyB-FiUJ_RCKSSXqWIfbJWcCDPXBQDJJsaw",
    authDomain: "green-city-21f03.firebaseapp.com",
    databaseURL: "https://green-city-21f03-default-rtdb.firebaseio.com",
    projectId: "green-city-21f03",
    storageBucket: "green-city-21f03.appspot.com",
    messagingSenderId: "868767501851",
    appId: "1:868767501851:web:a1720526490e5f52a872be",
    measurementId: "G-5HPVBF66W5"
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