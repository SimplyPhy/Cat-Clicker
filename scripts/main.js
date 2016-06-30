(function() {
	"use strict";

	var catPics = [],
		catNames = [],
		cats = [],
		catCount = 0,
		catContainer = document.getElementById("catContainer");

	var Cat = function(name, pic){

		this.name = name;
		this.pic = pic;
		this.clicks = 0;

		// increments catCount by 1 for each new Cat object
		(function() {
			catCount++;
		})();

		// pushes this.pic to catPics for each new Cat object
		(function(pic) {
		 catPics.push(pic);
		})(this.pic);

		// pushes this.name to catNames for each new Cat object
		(function(name) {
			catNames.push(name);
		})(this.name);

		// pushes each new Cat object into the cats array
		cats.push(this);

	};

	var cat1 = new Cat("Cute Cat", "images/cat1.jpg");
	var cat2 = new Cat("Shy Cat", "images/cat2.jpg");
	var cat3 = new Cat("Vicious Cat", "images/cat3.jpg");
	var cat4 = new Cat("Shocked Cat", "images/cat4.jpg");
	var cat5 = new Cat("Heroic Cat", "images/cat5.jpg");

	console.log(cats);

	// for (var i = 0; i < catCount; i++) {
	// 	var thisCat = "cat" + (i + 1).toString();
	// 	cats.push(thisCat);
	// };

	function createDiv() {
		var div = document.createElement("div");
		div.className = "catDiv";
		return div;
	};

	function createCatDiv() {

		// Blocks of inner.HTML to concatenate for each catContainer
		var catName = "<p class='catName'>";
		var catImg = "<img class='catPic' alt='Cat' src='";
		var catCounter = "<p class='catCounter'>Clicks: ";
		// var catClicks = 0;
		var catMaker = "";

		for(var i = 0; i < catCount; i++) {
			// Gives each catContainer its content
			catMaker = catImg + catPics[i] + "' />";
			catMaker += catName + catNames[i] + "</p>";
			catMaker += catCounter; // + catClicks + "</p>";

			// Makes catContainer divs and selects the last one
			var drawDiv = catContainer.appendChild(createDiv());
			var newCatDiv = catContainer.lastChild;

			var clickCounter = 0;

			newCatDiv.addEventListener('click', (function(count, maker, cDiv){
				count = clickCounter;
				maker = catMaker;
				cDiv = newCatDiv;


				return function(){
					count++;
					console.log(count);
					console.log(maker + count.toString() + "</p>");
					cDiv.innerHTML = maker + count.toString() + "</p>"; // prints to last catDiv
				};

			})(clickCounter, catMaker, newCatDiv));

			newCatDiv.innerHTML = catMaker + clickCounter.toString() + "</p>"; // prints the entire screen
			// newCatDiv.innerHTML = catMaker + "</p>";
		}

	};
	createCatDiv();

	// Way to create new Cat objects programmatically
	// var allCats = [];
	// var limit = 9;
	// for (var i = 0; i < limit; i++) {
 	//    	var name = 'cat' + i.toString();
 	//    	allCats.push(new Cat(name));
	// }
	// console.log(allCats);

})(); // program finish


/* *************************************************************** */
//    This is the original code:

// var documentReady = function() {
// 	var clickText = "Clicks: ";

// 	var cat1 = document.getElementById("catPic1");
// 	var catCounter1 = document.getElementById("catCounter1");
// 	var catClickCounter1 = 0;
// 	cat1.addEventListener("click", function() {
// 		catClickCounter1++;
// 		catCounter1.innerHTML = clickText + catClickCounter1;
// 	}, false);

// 	var cat2 = document.getElementById("catPic2");
// 	var catCounter2 = document.getElementById("catCounter2");
// 	var catClickCounter2 = 0;
// 	cat2.addEventListener("click", function() {
// 		catClickCounter2++;
// 		catCounter2.innerHTML = clickText + catClickCounter2;
// 	}, false);

// 	function makeSizer(size) {
// 		return function() {
//     		document.body.style.fontSize = size + 'px';
//   		};
// 	}

// var size12 = makeSizer(12);
// console.log(size12);
// };
// documentReady();


/* *************************************************************** */
//    This is an example of an iife

// // clear the screen for testing
// document.body.innerHTML = '';



// var nums = [1,2,3];

// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function () {
//             alert(numCopy);
//             console.log(num + " ," + numCopy);
//         };
//     })(num));

//     document.body.appendChild(elem);
// };


/* *************************************************************** */
// This is an example of forEach in action

// var numbers = [0, 1, 2, 3];

// numbers.forEach(function(num) {
//     // num is now limited to the scope of this function which indirectly means
//     // that num is limited to the scope of each iteration
//     var element = document.createElement('div');
//     element.innerHTML = num.toString();
//     // notice how num is no longer necessary as an argument for the event listener
//     element.addEventListener('click', function() {
//         alert(num);
//     });
//     document.body.appendChild(element);
// });