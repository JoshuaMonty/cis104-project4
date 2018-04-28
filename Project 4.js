"use strict";
const PROMPT = require('readline-sync');
const MOVIE_ID_REGEX = /^[0-9]*$/;
const MOVIE_RATING_REGEX = /^[0-5]$/;

let movies;
let sortOrder;

function main() {
	movies = [];
	setSortOrder();
	while (true) {
		calculateMovieAverage();
        	showMovies();
		sortMovies();
		showMainMenu();
        	addNewMovie();
        	addMovieRating();
		askForMenuOption();
		console.log("\n\n");
	}
}

main();

function calculateMovieAverage() {
	for (let i = 0; i < movies.length; i++) {
		let sumOfRatings = movies[i].ratings.reduce((a, b) => a + b, 0);
		movies[i].average = sumOfRatings / movies[i].ratings.length;
	}
}

function showMovies() {
	for (let i = 0; i < movies.length; i++) {
		console.log("\t" + String(i + 1) + ". " + movies[i].title + " (" + movies[i].average + " stars)");
	}
}

function sortMovies() {
	movies.sort((a, b) => {
		if (sortOrder == "high to low") {
			return a.average < b.average;
		} else {
			return a.average > b.average;
		}
	});
}

function showMainMenu() {
	console.log("Sort: " + sortOrder);
	console.log("Select a movie, type 'new' to add a new movie,");
	console.log("or 'sort' to change sort order.");
}

function addNewMovie() {
	console.log("\n");
	let title = PROMPT.question("Movie title: ");
	movies.push({
		title: title,
		ratings: []
	});
}

function addMovieRating(id) {
	let rating = PROMPT.questionInt("Your rating: ");
	if (!MOVIE_RATING_REGEX.test(rating)) {
		console.log("--- Movie rating invalid - Try again ---");
		addMovieRating(id);
	} else {
		movies[id].ratings.push(rating);
	}
}

function askForMenuOption() {
	let selection = PROMPT.question(" >> ");
	switch (selection) {
		case "new":
			addNewMovie();
			addMovieRating(movies.length - 1);
			break;
		case "sort":
			setSortOrder();
			break;
		default:
			if (selection == "" || (!MOVIE_ID_REGEX.test(selection) || selection > movies.length)) {
				console.log("--- Movie ID invalid - Try again ---");
				askForMenuOption();
			}
			addMovieRating(Number(selection) - 1);
			break;
	}
}
