import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

//const GoogleStrategy = require("passport-google-oauth20").Strategy;
dotenv.config();
export const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "not-set";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile) {
      const user = {
        username: profile.dispalyName,
        avatar: profile.photos[0],
      };
      user.save();
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user); // this is the callback that will be called when we want to retrieve a user based on their id
});

export default GoogleStrategy;
