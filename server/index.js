require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , session = require('express-session');

  const app = express()

  app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }))

  app.use(passport.initialize())

  app.use(passport.session())

  app.use(express.static(__dirname + '/../build'))

  massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
  })

  passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accesstoken, refreshToken, extraParams, profile, done) {
    profile.identities[0].user.id = profile.identities[0].user.id.toString()
    const db = app.get('db')

    db.get_user([profile.identities[0].user.id])
    .then( user => {
      if (user[0]) {
      return done( null, { auth_id: user[0].id})
      } else {
        db.create_user([profile.identities[0].user.id])
      .then( user => {
        return done(null, { auth_id: user[0].id})

    })
    }
  })
}))

  app.get('/auth', passport.authenticate('auth0'))
  app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:5000/profile',
    failureRedirect: 'http://localhost:5000/'
  }))

  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    app.get('db').find_session_user([user.id])
    .then( user => {
      return done(null, user[0])
    })
  })


let PORT = 3001;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
