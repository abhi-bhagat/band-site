const API_KEY = "?api_key=dc097925-218b-4626-9eb2-dfa7f49487f0";
const commentsURL = "https://project-1-api.herokuapp.com/comments";

// const commentData = [
// 	// {
// 	// 	name: "Connor Walton",
// 	// 	commentText:
// 	// 		"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
// 	// 	date: "02/17/2021",
// 	// },
// 	// {
// 	// 	name: "Emilie Beach",
// 	// 	commentText:
// 	// 		"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
// 	// 	date: "01/09/2021",
// 	// },
// 	// {
// 	// 	name: "Miles Acosta",
// 	// 	commentText:
// 	// 		"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
// 	// 	date: "12/20/2020",
// 	// },
// ];

// getting date in human readable form
const getDate = (botDate) => {
	return new Date(botDate).toLocaleDateString("en-US");
};

//function getComments(){}

let commentsCard;
let commentsImageHolder;
let commentsImage;
let commentsBody;
let commentsHeading;
let commentsName;
let commentsDate;
let commentsMessage;
let commentsDivider;

let commentData = [];
const parentElement = document.querySelector(".comments");

// create dynamic elements for comment section

// // function for creating elements
const createElements = () => {
	commentsCard = document.createElement("div");
	commentsImageHolder = document.createElement("div");
	commentsImage = document.createElement("div");
	commentsBody = document.createElement("div");
	commentsHeading = document.createElement("div");
	commentsName = document.createElement("div");
	commentsDate = document.createElement("div");
	commentsMessage = document.createElement("div");
	commentsDivider = document.createElement("div");
};

//assigningClass function
const assignClasses = () => {
	commentsCard.classList.add("comments__card");
	commentsImageHolder.classList.add("comments__image-holder");
	commentsImage.classList.add("comments__img");
	commentsBody.classList.add("comments__body");
	commentsHeading.classList.add("comments__heading");
	commentsName.classList.add("comments__name");
	commentsDate.classList.add("comments__date");
	commentsMessage.classList.add("comments__message");
	commentsDivider.classList.add("comment-section__divider");
};

// // appending childs function ====

const appendElements = () => {
	// // append to parent container
	parentElement.appendChild(commentsCard);
	parentElement.appendChild(commentsDivider);

	// // append childs to comment__card division
	commentsCard.appendChild(commentsImageHolder);
	commentsCard.appendChild(commentsBody);

	// // append child to comment__image-holder
	commentsImageHolder.appendChild(commentsImage);

	// //append child to comments__body
	commentsBody.appendChild(commentsHeading);
	commentsBody.appendChild(commentsMessage);

	// //append child to heading
	commentsHeading.appendChild(commentsName);
	commentsHeading.appendChild(commentsDate);
};

//displaying comments
const displayComment = (myObj) => {
	createElements();
	assignClasses();
	commentsName.innerText = myObj.name;
	const longDate = myObj.timestamp;
	// console.log(new Date(longDate));
	commentsDate.innerText = getDate(longDate);
	commentsMessage.innerText = myObj.comment;
	appendElements();
};

//fetching data using axios
function fetchComments() {
	axios
		.get(`${commentsURL}${API_KEY}`)
		.then((response) => {
			// console.log(response.data);
			commentData = response.data;
			commentData.sort((a,b)=>{a.timestamp - b.timestamp}).reverse();
			console.log(commentData);
			// console.log(commentData);

			const generateComments = () => {
				for (let i = 0; i < commentData.length; i++) {
					displayComment(commentData[i]);
				}
			};
			generateComments();
		})
		.catch((error) => {
			console.log(`Fetching comments failed!  Reason -------> ${error}`);
		});
}

fetchComments();

//posting data using axios
function postComments(message) {
	axios
		.post(`${commentsURL}${API_KEY}` ,message)
		.then((res) => {
			console.log(`POST method executed`,res);
			emptyInputs();
			fetchComments();
		})
		.catch((error)=>{
			console.log(`POST request failed because of --------=> ${error}`);
		});
}


// ==========================
//form handle
// ============================

const emptyInputs = () => {
	form.name.value = "";
	form.comment.value = "";
	parentElement.innerHTML = "";
};

const form = document.querySelector(".form__body");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const message = {
		name: event.target.name.value,
		comment: event.target.comment.value,
		// date: getDate(),
	};

	//posting this in database
	postComments(message);
});
