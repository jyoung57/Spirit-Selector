'use strict';

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetRecipeByIngredient(event) {
  event.preventDefault();

  const ingredientName = event.target.cocktail.value;
  $('#drinkList').html('');
  $('#drinkNames').html('');

  $.get(base_url + `/filter.php?i=${ingredientName}`, function (data) {
    console.log(data);
    console.log(data.drinks[0].strDrink);

    const drinkData = data.drinks;
    $('#drinkList').append(
      `<h3>List of Drinks:</h3>`
    );
    
    for (let i = 0; i < drinkData.length; i++) {
      const drink = drinkData[i];      
      if (drink) {
        $('#drinkNames').append(
          `<p>${drink.strDrink}</p>`
        );
      }
    }
  });
}
