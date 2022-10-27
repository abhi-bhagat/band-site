const API_KEY = "?api_key=dc097925-218b-4626-9eb2-dfa7f49487f0";
const URL = "https://project-1-api.herokuapp.com/showdates";

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

//using axios

axios
	.get(`${URL}${API_KEY}`)
	.then((res) => {
		console.log(res.data);
		const showsList = res.data;
		showsList.forEach((show) => {
			const card = produceElement("div", "shows__card", "card__holder");
			card.addEventListener("click", (e) => {
				const darBg = document.querySelector(".dark-background");

				if (darBg !== null) {
					darBg.classList.remove("dark-background");
				}

				e.currentTarget.classList.add("dark-background");
			});

			const dateTitle = produceElement("p", "shows__title", "date--small");
			dateTitle.innerText = "DATE";
			card.appendChild(dateTitle);

			const dateValue = produceElement("p", "shows__value", "shows__date");
			const botDate = show.date;
			const humanDate = new Date(botDate).toDateString();
			dateValue.innerText = humanDate;

			card.appendChild(dateValue);

			const venueTitle = produceElement("p", "shows__title", "venue--small");
			venueTitle.innerText = "VENUE";
			card.appendChild(venueTitle);

			const venuValue = produceElement("p", "shows__value", "shows__venue");
			venuValue.innerText = show.place;
			card.appendChild(venuValue);

			const locTitle = produceElement("p", "shows__title", "location--small");
			locTitle.innerHTML = "LOCATION";
			card.appendChild(locTitle);

			const locationValue = produceElement(
				"p",
				"shows__value",
				"shows__location"
			);
			locationValue.innerHTML = show.location;
			card.appendChild(locationValue);

			const bookButton = produceElement("button", "btn", "shows__btn");
			bookButton.innerText = "BUY TICKETS";
			card.appendChild(bookButton);

			appendGrandParent(card);
			//    card.innerText='';
		});
	})
	.catch((error) => {
		console.log(`Unable to GET shows data`);
	});

// effects click

const card = document.querySelector(".shows__cards");
