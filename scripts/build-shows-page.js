const showsList = [
	{
		date: "Mon Sept 06 2021",
		venue: "Ronald Lane ",
		location: "San Francisco, CA",
	},
	{
		date: "Tue Sept 21 2021",
		venue: "Pier 3 East",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Oct 15 2021",
		venue: "View Lounge  ",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Nov 06 2021",
		venue: "Hyatt Agency",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Nov 26 2021",
		venue: "Moscow Center",
		location: "San Francisco, CA",
	},
	{
		date: "Wed Dec 15 2021",
		venue: "Press Club",
		location: "San Francisco, CA",
	},
];

//get parent element
const cardList = document.querySelector(".shows__cards");

// const card = document.querySelector(".shows__card");

const produceElement = (tag, class1, class2) => {
	const element = document.createElement(tag);
	element.classList.add(class1, class2);

	return element;
};

const appendGrandParent = (ele) => {
	cardList.appendChild(ele);
};

showsList.forEach((show) => {
	const card = produceElement("div", "shows__card", "card__holder");

	const dateTitle = produceElement("p", "shows__title", "date--small");
	dateTitle.innerText = "DATE";
	card.appendChild(dateTitle);

	const dateValue = produceElement("p", "shows__value", "shows__date");
	dateValue.innerText = show.date;
	card.appendChild(dateValue);

	const venueTitle = produceElement("p", "shows__title", "venue--small");
	venueTitle.innerText = "VENUE";
	card.appendChild(venueTitle);

	const venuValue = produceElement("p", "shows__value", "shows__venue");
	venuValue.innerText = show.venue;
	card.appendChild(venuValue);

	const locTitle = produceElement("p", "shows__title", "location--small");
	locTitle.innerHTML = "LOCATION";
	card.appendChild(locTitle);

	const locationValue = produceElement("p", "shows__value", "shows__location");
	locationValue.innerHTML = show.location;
	card.appendChild(locationValue);

	const bookButton = produceElement("button", "btn", "shows__btn");
	bookButton.innerText = "BUY TICKETS";
	card.appendChild(bookButton);

	appendGrandParent(card);
	//    card.innerText='';
});

const card = document.querySelector(".shows__cards");

card.addEventListener("click", (e) => {
    e.target.classList.remove('dark-background');

	console.log(e.target);
    e.target.classList.add('dark-background');
});
