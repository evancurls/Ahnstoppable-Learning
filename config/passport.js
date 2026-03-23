import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth2";
import { pool } from "../db.js";
import dotenv from "dotenv";

dotenv.config({ path: "hidden.env" }); 

passport.use(
    new GoogleStrategy (
        {
            clientID:process.env.GOOGLE_CLIENT_ID, 
            clientSecret:process.env.GOOGLE_CLIENT_SECRET, 
            callBackURL:"/api/auth/google/callback", 
        }, 
        async (accessToken, refreshToken, profile, done) => {

            try {
                const existing = await pool.query(
                "SELECT * FROM users WHERE google_id = $1", 
                [profile.id]);

                if (existing.rows.length > 0) {
                    return done(null, existing.rows[0]); 
                }
                
                const newUser = await pool.query(
                "INSERT INTO students (google_id, username, email, avatar) VALUES ($1, $2, $3, $4) RETURNING *", 
                [profile.id, profile.displayName, profile.email[0].value, profile.photos[0].value] 
                ) 
                done(null, newUser.rows[0]); 

            } catch (err) {
                done(err, null); 
            }
        }
    )
);

export default passport 