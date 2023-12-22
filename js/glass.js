'use strict';

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetCocktailByGlassType(event) {
  event.preventDefault();

  const glassName = event.target.cocktail.value;
  $('#drinkList, #drinkNames').html('');

  $.get(`${base_url}/filter.php?g=${glassName}`, function (data) {
    const drinkData = data.drinks;

    if (drinkData) {
      $('#drinkList').append(`<h4>List of Drinks for a ${glassName}:</h4>`);

      for (let i = 0; i < drinkData.length; i++) {
        const drink = drinkData[i];
        const drinkName = drink.strDrink;
        $('#drinkNames').append(`<p>${drinkName}</p>`);
      }
    } else {
      $('#drinkList').append(`<p class="not-found">No drinks found for ${glassName}.</p>`);
    }
  });
}