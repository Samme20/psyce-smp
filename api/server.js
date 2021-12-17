const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session')
const port = 3001;

var DiscordStrategy = require('passport-discord').Strategy;


var scopes = ['identify'];

passport.use(new DiscordStrategy({
    clientID: '920362613773312010',
    clientSecret: 'IxOfBp1SHGrsphNIgShrR5LRUcTAozCy',
    callbackURL: 'http://localhost:3001/auth/discord/callback',
    scope: scopes
},
function (accessToken, refreshToken, profile, done) {
    //User logged in yay!
    process.nextTick(function () {
      return done(null, profile);
    });
}));


app.use(session({
    secret: '69420',
    cookie: {
        maxAge: 86400000
    },
    saveUninitialized: false,
    resave: false,
    name: 'discord.oauth2',
}));

app.use(passport.initialize());
app.use(passport.session());

//SERIALIZE STUFF
passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  app.use(cors({
    origin: [ 'http://localhost:3000' ],
    credentials: true
}));


app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('http://localhost:3000/whitelist') // Successful auth
});

app.get('/auth', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.user) {
        res.status(200).send(req.user);
    }
    else {
        res.status(401).send( { msg: 'Unauthorized' } );
    }
})

//Let's get it started in here
app.listen(port, () => console.log(`API RUNNING ON ${port}`))