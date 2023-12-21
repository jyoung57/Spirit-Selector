'use strict';

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetHistoryByIngredient(event) {
  event.preventDefault();

  const ingredientName = event.target.cocktail.value;
  $('#drinkList').html('');
  $('#drinkNames').html('');

  $.get(base_url + `/search.php?i=${ingredientName}`, function (data) {
    console.log(data,"url function");
    console.log(data.ingredients[0].strDescription,"array test");

    const drinkData = data.ingredients[0].strDescription;
    $('#drinkList').append(`<h3>Ingredient Information:</h3>`);  
    $('#drinkNames').append(`<p>${drinkData}</p>`);
          
  });
}
