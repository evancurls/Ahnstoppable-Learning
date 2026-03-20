import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router(); 

router.get(
    "/google",
    passport.authenticate("google", {scope: ["profile", "email"]})
); 

router.get("/google/callback", 
    passport.authenticate("google", {session: false, failureRedirect: "/"}), 
    (req, res) => {
        const token = jwt.sign(
            {id: req.user.id, email: req.user.email}, 
            hidden.env.JWT_SECRET, 
            {expiresIn: "7d"}
        ); 
    
        res.redirect(`${process.env.CLIENT_URL}/auth/callback?token=${token}`);
    } 
);

// gets user 
router.get("/me", authenticateToken, (req, res) => {
   res.json(req.user);  
});

router.post("/logout", (req, res) => {
    res.json({message: "Logged out"}); 
})



