"use strict";

const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const router = express.Router();

const ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		console.log()
		return next();
	}
	res.redirect("http://localhost:3000/login");
	return next();
}

const setupPassport = () => {
	const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
	const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

	passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((obj, done) => done(null, obj));
	
	passport.use(new GitHubStrategy({
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		// TODO: change for prod
		callbackURL: "http://localhost:5000/auth/github/callback"
	}, (accessToken, refreshToken, profile, done) => process.nextTick(() => done(null, profile))));
}

router.get('/login', passport.authenticate("github", {
	scope: ["user:email"]
}));

router.get("/callback", passport.authenticate("github", {
	failureRedirect: "/login" 
}), (req, res) => {
	//res.redirect("../../");
	// TODO: change for prod
	res.redirect("http://localhost:3000");
	console.log(req.user);
});

router.get("/account", ensureAuthenticated, (req, res) => {
	res.send(`Hello, ${req.user.displayName}!`);
});

module.exports = {router, passport, ensureAuthenticated, setupPassport};