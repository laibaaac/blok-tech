/* eslint-disable no-unused-vars */
const get_meal_btn = document.getElementById("get_meal");
const meal_container = document.getElementById("meal");



//hier begint het

// eslint-disable-next-line quotes
get_meal_btn.addEventListener('click', () => {
  // eslint-disable-next-line quotes
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      createMeal(res.meals[0]);
    })
    .catch(e => {
      console.warn(e);
    });
});

const createMeal = meal => {
	const ingredients = [];

	// Get all ingredients from the object. Up to 20
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(
				`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
			);
		} else {
			// Stop if there are no more ingredients
			break;
		}
	}
	const newInnerHTML = `
		<div class="row">
			<div class="foto">
				<img src="${meal.strMealThumb}" alt="Meal Image">
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
			
			</div>
		</div>
		
	`;

	meal_container.innerHTML = newInnerHTML;
};

//bron:https://www.freecodecamp.org/news/creating-a-random-meal-generator/