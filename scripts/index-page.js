

const commentData = [
    {
        name:'Connor Walton',
        commentText:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date:'02/17/2021',
    },
    {
        name:'Emilie Beach',
        commentText:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date:'01/09/2021',
    },
    {
        name:'Miles Acosta',
        commentText:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date:'12/20/2020',
    }
]


const parentElement = document.querySelector('.comments');

// create dynamic elements for comment section

// const commentsCard=document.createElement('div');
// const commentsImageHolder=document.createElement('div');
// const commentsImage=document.createElement('div');
// const commentsBody=document.createElement('div');
// const commentsHeading=document.createElement('div');
// const commentsName=document.createElement('div');
// const commentsDate=document.createElement('div');
// const commentsMessage=document.createElement('div');
// const commentsDivider=document.createElement('div');


// // function for creating elements
// const createElements = () =>{
//     //code to create elements

// }

// //assigning classes to created elements

// commentsCard.classList.add('comments__card');
// commentsImageHolder.classList.add('comments__image-holder');
// commentsImage.classList.add('comments__img');
// commentsBody.classList.add('comments__body');
// commentsHeading.classList.add('comments__heading');
// commentsName.classList.add('comments__name');
// commentsDate.classList.add('comments__date');
// commentsMessage.classList.add('comments__message');
// commentsDivider.classList.add('comment-section__divider');

// const assignClasses = () =>{
//     //code to assign classes
// }

// //assigning values
// commentsName.innerText=commentData[i].name;
// commentsDate.innerText=commentData[i].date;
// commentsMessage.innerText=commentData[i].commentText


// // appending childs ====

// // append to parent container 
// parentElement.appendChild(commentsCard);
// parentElement.appendChild(commentsDivider);


// // append childs to comment__card division
// commentsCard.appendChild(commentsImageHolder);
// commentsCard.appendChild(commentsBody);

// // append child to comment__image-holder 
// commentsImageHolder.appendChild(commentsImage);


// //append child to comments__body
// commentsBody.appendChild(commentsHeading);
// commentsBody.appendChild(commentsMessage);

// //append child to heading
// commentsHeading.appendChild(commentsName);
// commentsHeading.appendChild(commentsDate);



for (let i=0; i<commentData.length;i++){
    const commentsCard=document.createElement('div');
    const commentsImageHolder=document.createElement('div');
    const commentsImage=document.createElement('div');
    const commentsBody=document.createElement('div');
    const commentsHeading=document.createElement('div');
    const commentsName=document.createElement('div');
    const commentsDate=document.createElement('div');
    const commentsMessage=document.createElement('div');
    const commentsDivider=document.createElement('div');
    
    
    // function for creating elements
    const createElements = () =>{
        //code to create elements
    
    }
    
    //assigning classes to created elements
    
    commentsCard.classList.add('comments__card');
    commentsImageHolder.classList.add('comments__image-holder');
    commentsImage.classList.add('comments__img');
    commentsBody.classList.add('comments__body');
    commentsHeading.classList.add('comments__heading');
    commentsName.classList.add('comments__name');
    commentsDate.classList.add('comments__date');
    commentsMessage.classList.add('comments__message');
    commentsDivider.classList.add('comment-section__divider');
    
    const assignClasses = () =>{
        //code to assign classes
    }
    
    //assigning values
    commentsName.innerText=commentData[i].name;
    commentsDate.innerText=commentData[i].date;
    commentsMessage.innerText=commentData[i].commentText
    
    
    // appending childs ====
    
    // append to parent container 
    parentElement.appendChild(commentsCard);
    parentElement.appendChild(commentsDivider);
    
    
    // append childs to comment__card division
    commentsCard.appendChild(commentsImageHolder);
    commentsCard.appendChild(commentsBody);
    
    // append child to comment__image-holder 
    commentsImageHolder.appendChild(commentsImage);
    
    
    //append child to comments__body
    commentsBody.appendChild(commentsHeading);
    commentsBody.appendChild(commentsMessage);
    
    //append child to heading
    commentsHeading.appendChild(commentsName);
    commentsHeading.appendChild(commentsDate);
    
    
}