// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]


console.log(slides);

const slidesElement = [];
let currentIndex = 0;

const cardImageEl = document.querySelector('.slides-wrapper');
// const sliderElement = document.querySelector('.slider');


// slides.forEach((slideEl) => {
// 	const slideElement = document.createElement('li');
// 	slideElement.classList.add('slide');
// 	console.log(slideElement);
// 	slideElement.append(slideEl.url, slideEl.title, slideEl.description);
// 	cardImageEl.append(slideElement);
// })

for (key in slides) {
	const slideElement = document.createElement('li');
	slideElement.className ='slide';
	

	let slideElementImage = document.createElement('img');
	slideElementImage.src = slides[key].url;
	slideElement.append(slideElementImage);


	let slideElementTitle = document.createElement('h3');
	slideElementTitle.classList.add('slide__title');
	slideElementTitle.innerHTML = slides[key].title;
	

	let slideElementDescription = document.createElement('p');
	slideElementDescription.classList.add('slide__description');
	slideElementDescription.innerHTML = slides[key].description;
	
	let slideContent = document.createElement('div');
	slideContent.classList.add('slide__content');
	slideContent.append(slideElementTitle, slideElementDescription);

	slideElement.append(slideContent);

	cardImageEl.append(slideElement);
	slidesElement.push(slideElement);
	
}

console.log(cardImageEl);

slidesElement[0].classList.add('active')
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');

arrowPrev.addEventListener('click', function () {
	const slideActive = slidesElement[currentIndex];
	slideActive.classList.remove('active');

	currentIndex -- 
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}

	const slidePrev = slidesElement[currentIndex];
	slidePrev.classList.add('active');
})

arrowNext.addEventListener('click', function () {
	const slideActive = slidesElement[currentIndex];
	slideActive.classList.remove('active');

	currentIndex ++ 
	if (currentIndex > slides.length - 1) {
		currentIndex = 0;
	}

	const slideNext = slidesElement[currentIndex];
	slideNext.classList.add('active');
})


