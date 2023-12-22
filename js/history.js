'use strict';

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetHistoryByIngredient(event) {
  event.preventDefault();

  const ingredientName = event.target.cocktail.value;
  $('#drinkList').html('');
  $('#drinkNames').html('');

  $.get(`${base_url}/search.php?i=${ingredientName}`, function (data) {
    console.log(data, "url function");

    const ingredients = data.ingredients;

    if (ingredients && ingredients.length > 0) {
      const drinkData = ingredients[0].strDescription;
      $('#drinkList').append(`<h4>Ingredient Information:</h4>`);
      $('#drinkNames').append(`<p>${drinkData}</p>`);
    } else {
      $('#drinkList').append(`<p>No information found for ${ingredientName}.</p>`);
    }
  });
}