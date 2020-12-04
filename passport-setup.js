const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});


passport.use(new GoogleStrategy({
        clientID: '189920304809-4u5o754p119dqk3eiubvs466ppiu6mhu.apps.googleusercontent.com',
        clientSecret: 'v1r1d4rb-X5a82JF_Lz3o_j6',
        callbackURL: "http://localhost:3000/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));