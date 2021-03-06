"use strict";

const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const router = express.Router();

const ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

const setupPassport = () => {
	const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
	const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

	passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((obj, done) => done(null, obj));
	
	passport.use(new GitHubStrategy({
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		callbackURL: "https://a4-luke-bodwell.herokuapp.com/auth/github/callback"
	}, (accessToken, refreshToken, profile, done) => process.nextTick(() => done(null, profile))));
}

router.get('/login', passport.authenticate("github", {
	scope: ["user:email"]
}));

router.get("/callback", passport.authenticate("github", {
	failureRedirect: "/login" 
}), (req, res) => {
	res.redirect("../../");
});

router.get("/account", ensureAuthenticated, (req, res) => {
	res.send(`Hello, ${req.user.displayName}!`);
});

router.get("/is-authenticated", (req, res) => {
	res.json({isAuthenticated: req.user != null});
});


module.exports = {router, passport, ensureAuthenticated, setupPassport};