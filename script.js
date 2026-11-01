/* Website Part 3 */

// Display a welcome message on the home page

function showWelcome() {

	const welcomeMessage = document.getElementById("welcomeMessage");

	if (welcomeMessage) {

		welcomeMessage.textContent =
			"Welcome to Sweet Treats Bakery! Freshly baked with love.";

	}

}

// Show or hide extra information when the button is clicked

function toggleInfo() {

	const extraInfo = document.getElementById("extraInfo");

	if (extraInfo) {

		if (extraInfo.style.display === "none" ||
		    extraInfo.style.display === "") {

		    extraInfo.style.display = "block";

		} else {

		   extraInfo.style.display = "none";

		}

	}

}

// Validate the enquiry form before submission

function validateEnquiry(event) {

	const form = document.getElementById("enquiryForm");

	if (!form) {

	    return;

	}

	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const message = document.getElementById("message").value.trim();
	const feedback = document.getElementById("formFeedback");

	// Check if the required fields are empty

	if (name === "" || email === "" || message === "") {

		event.preventDefault();

		feedback.textContent =
			"Please fill in all the required fields.";

		feedback.style.color = "red";

		return;
	
	}

	// Check if the email address is valid

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailPattern.test(email)) {

		event.preventDefault();

		feedback.textContent =
			"Please enter a valid email address.";

		feedback.style.color = "red";

		return;

	}

	// Display the current year in the footer

	function updateFooterYear() {

		const year = document.getElementById("currentYear");

		if (year) {
	
		    year.textContent = new Date().getFullYear();

		}

	}

	// Run the functions when the page has loaded

	document.addEventListener("DOMContentLoaded", function () {

		showWelcome();

		updateFooterYear();

		// Check the enquiry form when it is submitted

		const enquiryForm = document.getElementById("enquiryForm");

		if (enquiryForm) {

			enquiryForm.addEventListener("submit", validateEnquiry);

// FAQ QUESTIONS

const accordionButtons = document.querySelectorAll(".accordion-trigger");

questions.forEach(function (button) {

	button.addEventListener("click", function () {

		const answer = button.nextElementSibling;

		const isOpen = button.getAttribute("aria-expanded") === "true";

		button.setAttribute("aria-expanded", String(!isOpen));

		answer.hidden = isOpen;

		const symbol = button.querySelector("span");

		if (symbol) {

			symbol.textContent = isOpen ? "+" : "-";

			}
		});

	});