import express from "express";
import passport from "../config/passport.js";
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
            process.env.JWT_SECRET, 
            {expiresIn: "7d"}
        ); 
        
        const clientUrl = process.env.CLIENT_URL || "http://localhost:5173"
        res.redirect(`${clientUrl}/auth/callback?token=${token}`);
    } 
);

// gets user 
router.get("/me", authenticateToken, (req, res) => {
   res.json(req.user);  
});

router.post("/logout", (req, res) => {
    res.json({message: "Logged out"}); 
})

export default router 



