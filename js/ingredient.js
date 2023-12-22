'use strict';

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetRecipeByIngredient(event) {
  event.preventDefault();

  const ingredientName = event.target.cocktail.value;
  $('#drinkList, #drinkNames').html('');

  $.get(`${base_url}/filter.php?i=${ingredientName}`, function (data) {
    const drinkData = data.drinks;

    if (drinkData) {
      drinkData.forEach((drink) => {
        if (drink) {
          $('#drinkNames').append(`<p>${drink.strDrink}</p>`);
        }
      });
    } else {
      $('#drinkList').append(
        `<p class="not-found">No drinks found with ${ingredientName}.</p>`
      );
    }
  });
}

