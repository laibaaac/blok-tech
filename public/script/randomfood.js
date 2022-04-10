/* eslint-disable no-unused-vars */
let newRandomFood = document.querySelector(".generateFood");
console.log("ikhebeenapi");

async function getRandomFood() {
  const res = await fetch( "https://foodish-api.herokuapp.com/");
  const eten = await res.json();
  showFood(eten);
}

//insert random food in text field
function showFood(eten) {
  let foodThumbnail = document.querySelector(".etenThumbnail");
  let foodTextField = document.querySelector(".randomFood");

  let foodImage = eten.drinks[0].strDrinkThumb;
  foodThumbnail.src = foodImage;

  let foodName = eten.drinks[0].strDrink;
  foodTextField.innerHTML = foodName;
}
