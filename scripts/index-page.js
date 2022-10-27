const API_KEY = "?api_key=dc097925-218b-4626-9eb2-dfa7f49487f0";
const commentsURL = "https://project-1-api.herokuapp.com/comments";






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
let svgImg;

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

	// commentsAvatar=document.createElement("img");
	// commentsAvatar.src="https://picsum.photos/200";
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



//test ==> generating random avatars

// axios
// .get('https://api.multiavatar.com/whatever.svg')
// .then((res)=>{
// 	 svgImg=res.data;
// 	// commentsImage.appendChild(svgImg);
// 	// console.log(commentsImage);
// })
// .catch((error=>{
// 	console.log(`Unable to GET avatar --=-=-=-=> ${error}`);
// }));

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
// commentsImage.appendChild(commentsAvatar);
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
			console.log(response.data);
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
			console.log(`GET request failed!  Reason -------> ${error}`);
		});
}

fetchComments();

//posting data using axios
function postComments(message) {
	axios
		.post(`${commentsURL}${API_KEY}` ,message)
		.then((res) => {
			console.log(`POST method executed`,res);
			fetchComments();
			emptyInputs();
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
		comment: event.target.comment.value
	};

	//posting this in database
	postComments(message);
});
